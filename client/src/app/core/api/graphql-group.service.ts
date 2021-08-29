import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client';
import { DataProxy } from '@apollo/client/cache/core/types/DataProxy';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
	AnswerReceivedGroupInvitationGQL,
	AnswerReceivedGroupInvitationMutation,
	AuthenticateUserDocument,
	AuthenticateUserQuery,
	CreateGroupGQL,
	CreateGroupMutation,
	DeleteGroupGQL,
	DeleteGroupMutation,
	EditGroupGQL,
	EditGroupMutation,
	LeaveGroupGQL,
	LeaveGroupMutation,
	RemoveMemberFromGroupGQL,
	StGroupAllData,
	StGroupAllDataInput,
	StGroupIdentificationDataFragment,
	ToggleInvitationRequestToGroupGQL,
	ToggleInvitationRequestToGroupMutation,
} from '../graphql-schema';
import { UserStorageService } from '../services';
import { createSTGroupUser } from '../utils';
import {
	QueryStGroupByGroupIdGQL,
	QueryStGroupByGroupNameGQL,
	QueryStGroupMemberOverviewByIdGQL,
	RemoveMemberFromGroupMutation,
	StGroupAllDataFragmentFragment,
	StGroupAllDataFragmentFragmentDoc,
	StGroupMemberOverviewFragment,
	StGroupUser,
	StUserPublicData,
	ToggleInviteUserIntoGroupGQL,
	ToggleInviteUserIntoGroupMutation,
	ToggleUsersInvitationRequestToGroupGQL,
} from './../graphql-schema/customGraphql.service';

@Injectable({
	providedIn: 'root',
})
export class GraphqlGroupService {
	constructor(
		private userStorageService: UserStorageService,
		private queryStGroupByGroupIdGQL: QueryStGroupByGroupIdGQL,
		private queryStGroupByGroupNameGQL: QueryStGroupByGroupNameGQL,
		private editGroupGQL: EditGroupGQL,
		private createGroupGQL: CreateGroupGQL,
		private deleteGroupGQL: DeleteGroupGQL,
		private toggleInvitationRequestToGroupGQL: ToggleInvitationRequestToGroupGQL,
		private toggleInviteUserIntoGroupGQL: ToggleInviteUserIntoGroupGQL,
		private toggleUsersInvitationRequestToGroupGQL: ToggleUsersInvitationRequestToGroupGQL,
		private answerReceivedGroupInvitationGQL: AnswerReceivedGroupInvitationGQL,
		private leaveGroupGQL: LeaveGroupGQL,
		private queryStGroupMemberOverviewByIdGQL: QueryStGroupMemberOverviewByIdGQL,
		private removeMemberFromGroupGQL: RemoveMemberFromGroupGQL
	) {}

	queryStGroupMemberOverviewById(userId: string): Observable<StGroupMemberOverviewFragment> {
		return this.queryStGroupMemberOverviewByIdGQL
			.fetch({
				id: userId,
			})
			.pipe(map((res) => res.data.queryUserPublicDataById));
	}

	queryGroupAllDataByGroupId(id: string): Observable<StGroupAllData> {
		return this.queryStGroupByGroupIdGQL
			.fetch({
				id,
			})
			.pipe(map((res) => res.data.querySTGroupByGroupId as StGroupAllData));
	}

	queryGroupIdentificationDataByGroupName(groupName: string): Observable<StGroupIdentificationDataFragment[]> {
		return this.queryStGroupByGroupNameGQL
			.fetch({
				groupName,
			})
			.pipe(map((x) => x.data.querySTGroupByGroupName));
	}

	createGroup(groupInput: StGroupAllDataInput): Observable<FetchResult<CreateGroupMutation>> {
		return this.createGroupGQL.mutate(
			{
				groupInput,
			},
			{
				update: (store: DataProxy, { data: { createGroup } }) => {
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					// update cache
					store.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...user,
							authenticateUser: {
								...user.authenticateUser,
								groups: {
									...user.authenticateUser.groups,
									groupOwner: [...user.authenticateUser.groups.groupOwner, createGroup],
								},
							},
						},
					});
				},
			}
		);
	}

	editGroup(groupInput: StGroupAllDataInput): Observable<FetchResult<EditGroupMutation>> {
		return this.editGroupGQL.mutate({
			groupInput,
		});
	}

	deleteGroup({ id }: StGroupIdentificationDataFragment): Observable<FetchResult<DeleteGroupMutation>> {
		return this.deleteGroupGQL.mutate(
			{
				id: id,
			},
			{
				optimisticResponse: {
					__typename: 'Mutation',
					deleteGroup: true,
				},
				update: (store: DataProxy, { data: { deleteGroup } }) => {
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					const groupOwner = user.authenticateUser.groups.groupOwner.filter((x) => x.id !== id);
					const groupMember = user.authenticateUser.groups.groupMember.filter((x) => x.id !== id);

					// update cache
					store.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...user,
							authenticateUser: {
								...user.authenticateUser,
								groups: {
									...user.authenticateUser.groups,
									groupOwner,
									groupMember,
								},
							},
						},
					});
				},
			}
		);
	}

	/***
		Group owner / manager can accept / deny users request into group
		@param  userId - id of user who is invited
		@param  groupId - id of group where user is invited
		@param  acceptUser - acceptUser or remove invitationReceived if false
	*/
	toggleUsersInvitationRequestToGroup(userId: string, groupId: string, acceptUser: boolean) {
		return this.toggleUsersInvitationRequestToGroupGQL.mutate(
			{
				userId,
				groupId,
				acceptUser,
			},
			{
				update: (store: DataProxy, { data: { toggleUsersInvitationRequestToGroup } }) => {
					// load group from storage
					const group = store.readFragment<StGroupAllDataFragmentFragment>({
						id: `STGroupAllData:${groupId}`,
						fragment: StGroupAllDataFragmentFragmentDoc,
						fragmentName: 'STGroupAllDataFragment',
					});

					// update cache
					store.writeFragment({
						id: `STGroupAllData:${groupId}`,
						fragment: StGroupAllDataFragmentFragmentDoc,
						fragmentName: 'STGroupAllDataFragment',
						data: {
							...group,
							numberOfInvitationReceived: group.numberOfInvitationReceived - 1,
							numberOfMembers: acceptUser ? group.numberOfMembers + 1 : group.numberOfMembers,
							groupMemberData: {
								...group.groupMemberData,
								invitationReceived: group.groupMemberData.invitationReceived.filter(
									(received) => received.id !== toggleUsersInvitationRequestToGroup.id
								),
								members: acceptUser ? [...group.groupMemberData.members, toggleUsersInvitationRequestToGroup] : [...group.groupMemberData.members],
							},
						},
					});
				},
			}
		);
	}

	/***
		Group manager / owner can invite / remove invitation for user
		@param  userId - id of user who is invited
		@param  groupId - id of group where user is invited
		@param  inviteUser - invite or remove invitation if false
	*/
	toggleInviteUserIntoGroup(userId: string, groupId: string, inviteUser: boolean): Observable<FetchResult<ToggleInviteUserIntoGroupMutation>> {
		return this.toggleInviteUserIntoGroupGQL.mutate(
			{
				userId,
				inviteUser,
				groupId,
			},
			{
				update: (store: DataProxy, { data: { toggleInviteUserIntoGroup } }) => {
					// load group from storage
					const group = store.readFragment<StGroupAllDataFragmentFragment>({
						id: `STGroupAllData:${groupId}`,
						fragment: StGroupAllDataFragmentFragmentDoc,
						fragmentName: 'STGroupAllDataFragment',
					});

					// add or remove user from inviteUser array
					const newInvitationSent = inviteUser
						? [...group.groupMemberData.invitationSent, toggleInviteUserIntoGroup]
						: group.groupMemberData.invitationSent.filter((invited) => invited.id !== userId);

					// update cache
					store.writeFragment({
						id: `STGroupAllData:${groupId}`,
						fragment: StGroupAllDataFragmentFragmentDoc,
						fragmentName: 'STGroupAllDataFragment',
						data: {
							...group,
							numberOfInvitationSent: inviteUser ? group.numberOfInvitationSent + 1 : group.numberOfInvitationSent - 1,
							groupMemberData: {
								...group.groupMemberData,
								invitationSent: newInvitationSent,
							},
						},
					});
				},
			}
		);
	}

	/***
	 * User can send or cancel his sent invitation request to group
	 * @param groupId
	 */
	toggleInvitationRequestToGroup(
		stGroupPartialData: StGroupIdentificationDataFragment,
		sendInvitation: boolean
	): Observable<FetchResult<ToggleInvitationRequestToGroupMutation>> {
		return this.toggleInvitationRequestToGroupGQL.mutate(
			{
				id: stGroupPartialData.id,
				sendInvitation: sendInvitation,
			},
			{
				update: (store: DataProxy, { data: { toggleInvitationRequestToGroup } }) => {
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					let groupInvitationSent;
					if (sendInvitation) {
						// sent invitation request to group
						groupInvitationSent = [...user.authenticateUser.groups.groupInvitationSent, toggleInvitationRequestToGroup];
					} else {
						// already sent invitation -> cancel it
						groupInvitationSent = user.authenticateUser.groups.groupInvitationSent.filter((x) => x.id !== stGroupPartialData.id);
					}

					console.log('groupInvitationSent', groupInvitationSent);

					// update cache
					store.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...user,
							authenticateUser: {
								...user.authenticateUser,
								groups: {
									...user.authenticateUser.groups,
									groupInvitationSent,
								},
							},
						},
					});
				},
			}
		);
	}

	/**
	 * if user got group invitation, accept or deny request
	 */
	answerReceivedGroupInvitation(
		stGroupPartialData: StGroupIdentificationDataFragment,
		accept: boolean
	): Observable<FetchResult<AnswerReceivedGroupInvitationMutation>> {
		return this.answerReceivedGroupInvitationGQL.mutate(
			{
				id: stGroupPartialData.id,
				accept,
			},
			{
				update: (store: DataProxy, { data: { answerReceivedGroupInvitation } }) => {
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					// remove invitation
					const groups = user.authenticateUser.groups;
					const groupInvitationReceived = groups.groupInvitationReceived.filter((x) => x.id !== answerReceivedGroupInvitation.id);
					const groupMember = accept ? [...groups.groupMember, answerReceivedGroupInvitation] : [...groups.groupMember];

					console.log('groupInvitationReceived', groupInvitationReceived);
					console.log('groupMember', groupMember);

					// update cache
					store.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...user,
							authenticateUser: {
								...user.authenticateUser,
								groups: {
									...user.authenticateUser.groups,
									groupInvitationReceived,
									groupMember,
								},
							},
						},
					});

					// if accepted -> update users if group
					if (accept) {
						this.updateMembersInGroup(store, stGroupPartialData.id, this.userStorageService.user, true);
					}
				},
			}
		);
	}

	private updateMembersInGroup(store: DataProxy, groupId: string, user: StUserPublicData, addUser: boolean) {
		const groupUser = createSTGroupUser(user);
		console.log('groupUser', groupUser);
		const group = store.readFragment<StGroupAllDataFragmentFragment>({
			id: `STGroupAllData:${groupId}`,
			fragment: StGroupAllDataFragmentFragmentDoc,
			fragmentName: 'STGroupAllDataFragment',
		});

		/* 
			may happen that user will accept invitation in menu/groups/overview, in that case we have no even loaded group data from serverm
			so no need to update anything
		*/
		if (!group) {
			return;
		}

		// update cache
		store.writeFragment({
			id: `STGroupAllData:${groupId}`,
			fragment: StGroupAllDataFragmentFragmentDoc,
			fragmentName: 'STGroupAllDataFragment',
			data: {
				...group,
				numberOfMembers: addUser ? group.numberOfMembers + 1 : group.numberOfMembers - 1,
				groupMemberData: {
					...group.groupMemberData,
					members: addUser ? [...group.groupMemberData.members, groupUser] : group.groupMemberData.members.filter((m) => m.id !== groupUser.id),
				},
			},
		});
	}

	removeMemberFromGroup(groupId: string, groupUser: StGroupUser): Observable<FetchResult<RemoveMemberFromGroupMutation>> {
		return this.removeMemberFromGroupGQL.mutate(
			{
				groupId: groupId,
				removingUserId: groupUser.id,
			},
			{
				update: (store: DataProxy, { data: { removeMemberFromGroup } }) => {
					const group = store.readFragment<StGroupAllDataFragmentFragment>({
						id: `STGroupAllData:${groupId}`,
						fragment: StGroupAllDataFragmentFragmentDoc,
						fragmentName: 'STGroupAllDataFragment',
					});

					const updatedMembers = group.groupMemberData.members.filter((m) => m.id !== groupUser.id);

					// update cache
					store.writeFragment({
						id: `STGroupAllData:${groupId}`,
						fragment: StGroupAllDataFragmentFragmentDoc,
						fragmentName: 'STGroupAllDataFragment',
						data: {
							...group,
							numberOfMembers: group.numberOfMembers - 1,
							portfolio: {
								...group.portfolio,
								lastPortfolioSnapshot: {
									...group.portfolio.lastPortfolioSnapshot,
									portfolioCash: group.portfolio.lastPortfolioSnapshot.portfolioCash - groupUser.portfolio.lastPortfolioSnapshot.portfolioCash,
									portfolioInvested:
										group.portfolio.lastPortfolioSnapshot.portfolioInvested - groupUser.portfolio.lastPortfolioSnapshot.portfolioInvested,
								},
								numberOfExecutedBuyTransactions:
									group.portfolio.numberOfExecutedBuyTransactions - groupUser.portfolio.numberOfExecutedBuyTransactions,
								numberOfExecutedSellTransactions:
									group.portfolio.numberOfExecutedSellTransactions - groupUser.portfolio.numberOfExecutedSellTransactions,
								numberOfExecutedTransactions: group.portfolio.numberOfExecutedTransactions - groupUser.portfolio.numberOfExecutedTransactions,
							},
							startedPortfolio: {
								...group.startedPortfolio,
								numberOfExecutedBuyTransactions:
									group.startedPortfolio.numberOfExecutedBuyTransactions - groupUser.startedPortfolio.numberOfExecutedBuyTransactions,
								numberOfExecutedSellTransactions:
									group.startedPortfolio.numberOfExecutedSellTransactions - groupUser.startedPortfolio.numberOfExecutedSellTransactions,
								numberOfExecutedTransactions:
									group.startedPortfolio.numberOfExecutedTransactions - groupUser.startedPortfolio.numberOfExecutedTransactions,
								portfolioCash: group.startedPortfolio.portfolioCash - groupUser.startedPortfolio.portfolioCash,
								portfolioInvested: group.startedPortfolio.portfolioInvested - groupUser.startedPortfolio.portfolioInvested,
							},
							groupMemberData: {
								...group.groupMemberData,
								members: [...updatedMembers],
							},
						},
					});
				},
			}
		);
	}

	leaveGroup(id: string): Observable<FetchResult<LeaveGroupMutation>> {
		return this.leaveGroupGQL.mutate(
			{
				id,
			},
			{
				update: (store: DataProxy, { data: { leaveGroup } }) => {
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					// remove user as group member
					this.updateMembersInGroup(store, id, this.userStorageService.user, false);

					// update cache
					store.writeQuery({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
						data: {
							...user,
							authenticateUser: {
								...user.authenticateUser,
								groups: {
									...user.authenticateUser.groups,
									groupMember: this.userStorageService.user.groups.groupMember.filter((x) => x.id !== id),
								},
							},
						},
					});
				},
			}
		);
	}
}
