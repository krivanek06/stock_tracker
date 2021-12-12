import { Injectable } from '@angular/core';
import { DataProxy, FetchResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { UserStorageService } from '../services';
import {
	AuthenticateUserDocument,
	AuthenticateUserQuery,
	CloseTicketGQL,
	CloseTicketMutation,
	CommentTicketEditGQL,
	CommentTicketEditMutation,
	CommentTicketGQL,
	CommentTicketMutation,
	CreateTicketGQL,
	CreateTicketMutation,
	DeleteTicketGQL,
	StTicket,
	StTicketComment,
	StTicketCommentEditValues,
	StTicketCreateValues,
	StTicketFragmentFragment,
	StTicketFragmentFragmentDoc,
} from './../graphql-schema';

@Injectable({
	providedIn: 'root',
})
export class GraphqlTicketService {
	constructor(
		private userStorageService: UserStorageService,
		private CreateTicketGQL: CreateTicketGQL,
		private closeTicketGQL: CloseTicketGQL,
		private deleteTicketGQL: DeleteTicketGQL,
		private commentTicketGQL: CommentTicketGQL,
		private commentTicketEditGQL: CommentTicketEditGQL
	) {}

	createTicket(ticketValuse: StTicketCreateValues): Observable<FetchResult<CreateTicketMutation>> {
		return this.CreateTicketGQL.mutate(
			{
				ticketValuse,
			},
			{
				update: (store: DataProxy, { data }) => {
					const createTicket = data?.createTicket as StTicket;
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					if (!user?.authenticateUser) {
						return;
					}

					// update cashe
					store.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...user,
							authenticateUser: {
								...user.authenticateUser,
								userPrivateData: {
									...user.authenticateUser.userPrivateData,
									tickets: [...user.authenticateUser.userPrivateData.tickets, createTicket],
								},
							},
						},
					});
				},
			}
		);
	}

	deleteTicket(ticket: StTicket): Observable<FetchResult<CommentTicketMutation>> {
		return this.deleteTicketGQL.mutate(
			{
				ticketId: ticket.id,
			},
			{
				update: (store: any) => {
					const normalizedId = store.identify({ id: ticket.id, __typename: 'STTicket' });
					if (normalizedId) {
						store.evict({ id: normalizedId });
						store.gc();
					}
				},
			}
		);
	}

	commentTicket({ id }: StTicket, comment: string): Observable<FetchResult<CommentTicketMutation>> {
		return this.commentTicketGQL.mutate(
			{
				ticketId: id,
				comment: comment,
			},
			{
				update: (store: DataProxy, { data }) => {
					const commentTicket = data?.commentTicket as StTicketComment;
					const ticket = store.readFragment<StTicketFragmentFragment>({
						id: `STTicket:${id}`,
						fragment: StTicketFragmentFragmentDoc,
						fragmentName: 'STTicketFragment',
					});

					console.log('ticket closing', ticket);

					// update cashe
					store.writeFragment({
						id: `STTicket:${id}`,
						fragment: StTicketFragmentFragmentDoc,
						fragmentName: 'STTicketFragment',
						data: {
							...ticket,
							comments: [...(ticket?.comments || []), commentTicket],
						},
					});
				},
			}
		);
	}
	commentTicketEdit(commentEditValues: StTicketCommentEditValues): Observable<FetchResult<CommentTicketEditMutation>> {
		return this.commentTicketEditGQL.mutate(
			{
				commentEditValues,
			},
			{
				update: (store: DataProxy) => {
					const ticket = store.readFragment<StTicketFragmentFragment>({
						id: `STTicket:${commentEditValues.ticketId}`,
						fragment: StTicketFragmentFragmentDoc,
						fragmentName: 'STTicketFragment',
					});

					if (!ticket) {
						return;
					}

					// update comment in array
					const comments = ticket.comments.map((el) => {
						return el.id == commentEditValues.commentId ? Object.assign({}, el, { comment: commentEditValues.newComment }) : el;
					});

					store.writeFragment({
						id: `STTicket:${commentEditValues.ticketId}`,
						fragment: StTicketFragmentFragmentDoc,
						fragmentName: 'STTicketFragment',
						data: {
							...ticket,
							comments: [...comments],
						},
					});
				},
			}
		);
	}

	closeTicket({ id }: StTicket): Observable<FetchResult<CloseTicketMutation>> {
		return this.closeTicketGQL.mutate(
			{
				ticketId: id,
			},
			{
				update: (store: DataProxy, { data }) => {
					const ticket = store.readFragment<StTicketFragmentFragment>({
						id: `STTicket:${id}`,
						fragment: StTicketFragmentFragmentDoc,
						fragmentName: 'STTicketFragment',
					});

					console.log('ticket closing', ticket);

					// update cashe
					store.writeFragment({
						id: `STTicket:${id}`,
						fragment: StTicketFragmentFragmentDoc,
						fragmentName: 'STTicketFragment',
						data: {
							...ticket,
							isOpen: false,
						},
					});
				},
			}
		);
	}
}
