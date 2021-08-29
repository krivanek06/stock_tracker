import { Injectable } from '@angular/core';
import { DataProxy } from '@apollo/client';
import { FetchResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { StTicketCreateValues } from '../graphql-schema';
import { UserStorageService } from '../services';
import {
	AuthenticateUserDocument,
	AuthenticateUserQuery,
	CloseTicketGQL,
	CloseTicketMutation,
	CommentTicketGQL,
	CommentTicketMutation,
	CreateTicketGQL,
	CreateTicketMutation,
	DeleteTicketGQL,
	StTicket,
	StTicketFragmentFragment,
	StTicketFragmentFragmentDoc,
} from './../graphql-schema/customGraphql.service';

@Injectable({
	providedIn: 'root',
})
export class GraphqlTicketService {
	constructor(
		private userStorageService: UserStorageService,
		private CreateTicketGQL: CreateTicketGQL,
		private closeTicketGQL: CloseTicketGQL,
		private deleteTicketGQL: DeleteTicketGQL,
		private commentTicketGQL: CommentTicketGQL
	) {}

	createTicket(ticketValuse: StTicketCreateValues): Observable<FetchResult<CreateTicketMutation>> {
		return this.CreateTicketGQL.mutate(
			{
				ticketValuse,
			},
			{
				update: (store: DataProxy, { data: { createTicket } }) => {
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

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

	commentTicket({ id }: StTicket, comment: string): Observable<FetchResult<CommentTicketMutation>> {
		return this.commentTicketGQL.mutate(
			{
				ticketId: id,
				comment: comment,
			},
			{
				update: (store: DataProxy, { data: { commentTicket } }) => {
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
							comments: [...ticket.comments, commentTicket],
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
				update: (store: DataProxy, { data: { closeTicket } }) => {
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
