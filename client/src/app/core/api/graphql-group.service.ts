import { Injectable } from '@angular/core';
import { DataProxy, FetchResult } from '@apollo/client/core';
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
	QueryStGroupByGroupIdGQL,
	QueryStGroupByGroupIdWithoutHoldingGQL,
	QueryStGroupByGroupNameGQL,
	QueryStGroupMemberOverviewByIdGQL,
	RemoveMemberFromGroupGQL,
	RemoveMemberFromGroupMutation,
	StGroupAllData,
	StGroupAllDataFragmentFragment,
	StGroupAllDataFragmentFragmentDoc,
	StGroupAllDataInput,
	StGroupAllDataWithoutHoldingsFragment,
	StGroupIdentificationDataFragment,
	StGroupIdentificationDataFragmentDoc,
	StGroupMemberOverviewFragment,
	StGroupUser,
	StUserIdentificationDataFragment,
	StUserPublicData,
	ToggleInvitationRequestToGroupGQL,
	ToggleInvitationRequestToGroupMutation,
	ToggleInviteUserIntoGroupGQL,
	ToggleInviteUserIntoGroupMutation,
	ToggleUsersInvitationRequestToGroupGQL,
	ToggleWatchGroupGQL,
	ToggleWatchGroupMutation,
} from '../graphql-schema';
import { UserStorageService } from '../services';
import { createSTGroupUser } from '../utils';

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
		private removeMemberFromGroupGQL: RemoveMemberFromGroupGQL,
		private toggleWatchGroupGQL: ToggleWatchGroupGQL,
		private queryStGroupByGroupIdWithoutHoldingGQL: QueryStGroupByGroupIdWithoutHoldingGQL
	) {}

	queryStGroupMemberOverviewById(userId: string): Observable<StGroupMemberOverviewFragment> {
		return this.queryStGroupMemberOverviewByIdGQL
			.fetch({
				id: userId,
			})
			.pipe(map((res) => res.data.queryUserPublicDataById as StGroupMemberOverviewFragment));
	}

	queryGroupAllDataByGroupId(id: string): Observable<StGroupAllData> {
		return this.queryStGroupByGroupIdGQL
			.fetch({
				id,
			})
			.pipe(map((res) => res.data.querySTGroupByGroupId as StGroupAllData));
	}

	queryStGroupByGroupIdWithoutHolding(id: string): Observable<StGroupAllDataWithoutHoldingsFragment> {
		return this.queryStGroupByGroupIdWithoutHoldingGQL
			.fetch({
				id,
			})
			.pipe(map((res) => res.data.querySTGroupByGroupId as StGroupAllDataWithoutHoldingsFragment));
	}

	queryGroupIdentificationDataByGroupName(groupName: string): Observable<StGroupIdentificationDataFragment[]> {
		return this.queryStGroupByGroupNameGQL
			.fetch({
				groupName,
			})
			.pipe(map((x) => x.data.querySTGroupByGroupName as StGroupIdentificationDataFragment[]));
	}

	createGroup(groupInput: StGroupAllDataInput): Observable<FetchResult<CreateGroupMutation>> {
		return this.createGroupGQL.mutate(
			{
				groupInput,
			},
			{
				update: (store: DataProxy, { data }) => {
					const createGroup = data?.createGroup as StGroupAllData;

					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					if (!user?.authenticateUser) {
						return;
					}

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
				update: (store: DataProxy, { data }) => {
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					if (!user?.authenticateUser) {
						return;
					}

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
				update: (store: DataProxy, { data }) => {
					const toggleUsersInvitationRequestToGroup = data?.toggleUsersInvitationRequestToGroup as StGroupUser;
					// load group from storage
					const group = store.readFragment<StGroupAllDataFragmentFragment>({
						id: `STGroupAllData:${groupId}`,
						fragment: StGroupAllDataFragmentFragmentDoc,
						fragmentName: 'STGroupAllDataFragment',
					});

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
	toggleInviteUserIntoGroup(
		userIdentification: StUserIdentificationDataFragment | StGroupUser,
		groupId: string,
		inviteUser: boolean
	): Observable<FetchResult<ToggleInviteUserIntoGroupMutation>> {
		return this.toggleInviteUserIntoGroupGQL.mutate(
			{
				userId: userIdentification.id,
				inviteUser,
				groupId,
			},
			{
				optimisticResponse: {
					__typename: 'Mutation',
					toggleInviteUserIntoGroup: {
						__typename: 'STGroupUser',
						accountCreatedDate: userIdentification.accountCreatedDate,
						nickName: userIdentification.nickName,
						sinceDate: new Date().toISOString(),
						startedPortfolio: {
							date: new Date().toISOString(),
							numberOfExecutedBuyTransactions: userIdentification.portfolio.numberOfExecutedBuyTransactions,
							numberOfExecutedSellTransactions: userIdentification.portfolio.numberOfExecutedSellTransactions,
							__typename: 'STPortfolioSnapshotStarted',
							portfolioCash: userIdentification.portfolio.portfolioCash,
							portfolioInvested: userIdentification.portfolio.lastPortfolioSnapshot.portfolioInvested,
							transactionFees: userIdentification.portfolio.transactionFees,
							lastPortfolioBalance: userIdentification.portfolio.lastPortfolioBalance,
						},
						id: userIdentification.id,
						photoURL: userIdentification.photoURL || '',
						portfolio: {
							...userIdentification.portfolio,
						},
						currentPosition: null,
						locale: null,
						previousPosition: null,
					},
				},
				update: (store: DataProxy, { data }) => {
					const toggleInviteUserIntoGroup = data?.toggleInviteUserIntoGroup as StGroupUser;
					// load group from storage
					const group = store.readFragment<StGroupAllDataFragmentFragment>({
						id: `STGroupAllData:${groupId}`,
						fragment: StGroupAllDataFragmentFragmentDoc,
						fragmentName: 'STGroupAllDataFragment',
					});

					if (!group) {
						return;
					}

					// add or remove user from inviteUser array
					const newInvitationSent = inviteUser
						? [...group.groupMemberData.invitationSent, toggleInviteUserIntoGroup]
						: group.groupMemberData.invitationSent.filter((invited) => invited.id !== userIdentification.id);

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
				update: (store: DataProxy, { data }) => {
					const toggleInvitationRequestToGroup = data?.toggleInvitationRequestToGroup as StGroupAllData;
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					if (!user?.authenticateUser) {
						return;
					}

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
				update: (store: DataProxy, { data }) => {
					const answerReceivedGroupInvitation = data?.answerReceivedGroupInvitation as StGroupAllData;
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					if (!user?.authenticateUser) {
						return;
					}

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
				update: (store: DataProxy, { data }) => {
					const group = store.readFragment<StGroupAllDataFragmentFragment>({
						id: `STGroupAllData:${groupId}`,
						fragment: StGroupAllDataFragmentFragmentDoc,
						fragmentName: 'STGroupAllDataFragment',
					});

					if (!group) {
						return;
					}

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
							},
							startedPortfolio: {
								...group.startedPortfolio,
								numberOfExecutedBuyTransactions:
									group.startedPortfolio.numberOfExecutedBuyTransactions - groupUser.startedPortfolio.numberOfExecutedBuyTransactions,
								numberOfExecutedSellTransactions:
									group.startedPortfolio.numberOfExecutedSellTransactions - groupUser.startedPortfolio.numberOfExecutedSellTransactions,
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

	toggleWatchGroup(groupId: string, startWatching: boolean): Observable<FetchResult<ToggleWatchGroupMutation>> {
		return this.toggleWatchGroupGQL.mutate(
			{
				groupId,
			},
			{
				optimisticResponse: {
					__typename: 'Mutation',
					toggleWatchGroup: startWatching,
				},
				update: (store: DataProxy, { data }) => {
					const userId = this.userStorageService.user.id;
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: userId,
						},
					});

					const group = store.readFragment<StGroupIdentificationDataFragment>({
						id: `STGroupAllData:${groupId}`,
						fragment: StGroupIdentificationDataFragmentDoc,
						fragmentName: 'STGroupIdentificationData',
					});

					if (!user?.authenticateUser || !group) {
						return;
					}

					const userWatchedGroupIds = user.authenticateUser.groups.groupWatched.map((g) => g.id);

					// toggle
					let groupWatched: StGroupIdentificationDataFragment[] = [];
					if (userWatchedGroupIds.includes(groupId)) {
						// user watching group => remove it
						groupWatched = user.authenticateUser.groups.groupWatched.filter((g) => g.id !== groupId);
					} else {
						// user not watching group => add it
						groupWatched = [...user.authenticateUser.groups.groupWatched, group];
					}

					// update user
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
									groupWatched,
								},
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
				update: (store: DataProxy, { data }) => {
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					if (!user?.authenticateUser) {
						return;
					}

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
