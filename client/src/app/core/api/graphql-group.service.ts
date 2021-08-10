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
	StGroupAllData,
	StGroupAllDataInput,
	StGroupIdentificationDataFragment,
	ToggleInvitationRequestToGroupGQL,
	ToggleInvitationRequestToGroupMutation,
} from '../graphql-schema';
import { UserStorageService } from '../services';
import {
	QueryStGroupByGroupIdDocument,
	QueryStGroupByGroupIdGQL,
	QueryStGroupByGroupIdQuery,
	QueryStGroupByGroupNameGQL,
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
		private leaveGroupGQL: LeaveGroupGQL
	) {}

	queryGroupAllDataByGroupId(id: string): Observable<StGroupAllData> {
		return this.queryStGroupByGroupIdGQL
			.fetch({
				id,
			})
			.pipe(map((res) => res.data.querySTGroupByGroupId as StGroupAllData));
	}

	queryGroupPartialDataByGroupName(groupName: string): Observable<StGroupIdentificationDataFragment[]> {
		return this.queryStGroupByGroupNameGQL
			.fetch({
				groupName,
			})
			.pipe(map((x) => x.data.querySTGroupByGroupName.groups));
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
		return this.editGroupGQL.mutate(
			{
				groupInput,
			},
			{
				update: (store: DataProxy, { data: { editGroup } }) => {
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});
					// save group as owner's or as member's
					const isGroupOwner = editGroup.owner.id === this.userStorageService.user.id;
					const groupOwner = [...user.authenticateUser.groups.groupOwner];
					const groupMember = [...user.authenticateUser.groups.groupMember];

					if (isGroupOwner) {
						const index = user.authenticateUser.groups.groupOwner.map((x) => x.id).indexOf(editGroup.id);
						groupOwner.splice(index, 1, editGroup);
					} else {
						const index = user.authenticateUser.groups.groupMember.map((x) => x.id).indexOf(editGroup.id);
						groupMember.splice(index, 1, editGroup);
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
					const group = store.readQuery<QueryStGroupByGroupIdQuery>({
						query: QueryStGroupByGroupIdDocument,
						variables: {
							id: groupId,
						},
					});

					// update cache
					store.writeQuery({
						query: QueryStGroupByGroupIdDocument,
						variables: {
							id: groupId,
						},
						data: {
							...group,
							querySTGroupByGroupId: {
								...group.querySTGroupByGroupId,
								numberOfInvitationReceived: group.querySTGroupByGroupId.numberOfInvitationReceived - 1,
								groupMemberData: {
									...group.querySTGroupByGroupId.groupMemberData,
									invitationReceived: group.querySTGroupByGroupId.groupMemberData.invitationReceived.filter(
										(received) => received.id !== toggleUsersInvitationRequestToGroup.id
									),
									members: acceptUser
										? [...group.querySTGroupByGroupId.groupMemberData.members, toggleUsersInvitationRequestToGroup]
										: [...group.querySTGroupByGroupId.groupMemberData.members],
								},
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
					const group = store.readQuery<QueryStGroupByGroupIdQuery>({
						query: QueryStGroupByGroupIdDocument,
						variables: {
							id: groupId,
						},
					});

					// add or remove user from inviteUser array
					const newInvitationSent = inviteUser
						? [...group.querySTGroupByGroupId.groupMemberData.invitationSent, toggleInviteUserIntoGroup]
						: group.querySTGroupByGroupId.groupMemberData.invitationSent.filter((invited) => invited.id !== toggleInviteUserIntoGroup.id);

					// update cache
					store.writeQuery({
						query: QueryStGroupByGroupIdDocument,
						variables: {
							id: groupId,
						},
						data: {
							...group,
							querySTGroupByGroupId: {
								...group.querySTGroupByGroupId,
								numberOfInvitationSent: inviteUser
									? group.querySTGroupByGroupId.numberOfInvitationSent + 1
									: group.querySTGroupByGroupId.numberOfInvitationSent - 1,
								groupMemberData: {
									...group.querySTGroupByGroupId.groupMemberData,
									invitationSent: newInvitationSent,
								},
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
		stGroupPartialData: StGroupIdentificationDataFragment
	): Observable<FetchResult<ToggleInvitationRequestToGroupMutation>> {
		return this.toggleInvitationRequestToGroupGQL.mutate(
			{
				id: stGroupPartialData.id,
			},
			{
				optimisticResponse: {
					__typename: 'Mutation',
					toggleInvitationRequestToGroup: {
						...stGroupPartialData,
					},
				},
				update: (store: DataProxy, { data: { toggleInvitationRequestToGroup } }) => {
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					let groupInvitationSent;
					if (user.authenticateUser.groups.groupInvitationSent.map((x) => x.id).includes(stGroupPartialData.id)) {
						// already sent invitation -> cancel it
						groupInvitationSent = user.authenticateUser.groups.groupInvitationSent.filter((x) => x.id !== stGroupPartialData.id);
					} else {
						// sent invitation request to group
						groupInvitationSent = [...user.authenticateUser.groups.groupInvitationSent, toggleInvitationRequestToGroup];
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
				optimisticResponse: {
					__typename: 'Mutation',
					answerReceivedGroupInvitation: {
						...stGroupPartialData,
					},
				},
				update: (store: DataProxy, { data: { answerReceivedGroupInvitation } }) => {
					const user = store.readQuery<AuthenticateUserQuery>({
						query: AuthenticateUserDocument,
						variables: {
							id: this.userStorageService.user.id,
						},
					});

					// remove invitation
					const groups = user.authenticateUser.groups;
					const groupInvitationReceived = groups.groupInvitationReceived.filter((x) => x.id !== stGroupPartialData.id);
					const groupMember = accept ? [...groups.groupMember, answerReceivedGroupInvitation] : [...groups.groupMember];

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
				optimisticResponse: {
					__typename: 'Mutation',
					leaveGroup: true,
				},
				update: (store: DataProxy, { data: { leaveGroup } }) => {
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
