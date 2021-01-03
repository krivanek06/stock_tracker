import {Injectable} from '@angular/core';
import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';
import {
    AnswerReceivedGroupInvitationGQL, AnswerReceivedGroupInvitationMutation,
    AuthenticateUserDocument,
    AuthenticateUserQuery,
    CreateGroupGQL,
    CreateGroupMutation,
    DeleteGroupGQL, DeleteGroupMutation,
    EditGroupGQL,
    EditGroupMutation,
    LeaveGroupGQL, LeaveGroupMutation,
    QueryStGroupAllDataByGroupIdGQL,
    StGroupAllData,
    StGroupAllDataInput, StGroupPartialData,
    ToggleInvitationRequestToGroupGQL, ToggleInvitationRequestToGroupMutation,
} from '../../../api/customGraphql.service';
import {Observable} from 'rxjs';
import {FetchResult} from '@apollo/client';
import {DataProxy} from '@apollo/client/cache/core/types/DataProxy';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GraphqlGroupService {

    constructor(private authService: AuthFeatureService,
                private queryStGroupAllDataByGroupIdGQL: QueryStGroupAllDataByGroupIdGQL,
                private editGroupGQL: EditGroupGQL,
                private createGroupGQL: CreateGroupGQL,
                private deleteGroupGQL: DeleteGroupGQL,
                private toggleInvitationRequestToGroupGQL: ToggleInvitationRequestToGroupGQL,
                private answerReceivedGroupInvitationGQL: AnswerReceivedGroupInvitationGQL,
                private leaveGroupGQL: LeaveGroupGQL) {
    }

    querySTGroupAllDataByGroupId(groupId: string, loadFromNetwork = false): Observable<StGroupAllData> {
        return this.queryStGroupAllDataByGroupIdGQL.fetch({
            groupId
        }, {
            fetchPolicy: 'network-only' // loadFromNetwork ? 'network-only' : 'cache-first'
        }).pipe(map(res => res.data.querySTGroupAllDataByGroupId as StGroupAllData));
    }


    createGroup(groupInput: StGroupAllDataInput): Observable<FetchResult<CreateGroupMutation>> {
        return this.createGroupGQL.mutate({
            groupInput
        }, {
            update: (store: DataProxy, {data: {createGroup}}) => {
                const user = store.readQuery<AuthenticateUserQuery>({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    }
                });

                // update cache
                store.writeQuery({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    },
                    data: {
                        ...user,
                        authenticateUser: {
                            ...user.authenticateUser,
                            groups: {
                                ...user.authenticateUser.groups,
                                groupOwner: [...user.authenticateUser.groups.groupOwner, createGroup],
                            }
                        }
                    }
                });
            }
        });
    }

    editGroup(groupInput: StGroupAllDataInput): Observable<FetchResult<EditGroupMutation>> {
        return this.editGroupGQL.mutate({
            groupInput
        }, {
            update: (store: DataProxy, {data: {editGroup}}) => {
                const user = store.readQuery<AuthenticateUserQuery>({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    }
                });
                // save group as owner's or as member's
                const isGroupOwner = editGroup.owner.user.uid === this.authService.user.uid;
                const groupOwner = [...user.authenticateUser.groups.groupOwner];
                const groupMember = [...user.authenticateUser.groups.groupMember];

                if (isGroupOwner) {
                    const index = user.authenticateUser.groups.groupOwner.map(x => x.groupId).indexOf(editGroup.groupId);
                    groupOwner.splice(index, 1, editGroup);
                } else {
                    const index = user.authenticateUser.groups.groupMember.map(x => x.groupId).indexOf(editGroup.groupId);
                    groupMember.splice(index, 1, editGroup);
                }

                // update cache
                store.writeQuery({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    },
                    data: {
                        ...user,
                        authenticateUser: {
                            ...user.authenticateUser,
                            groups: {
                                ...user.authenticateUser.groups,
                                groupOwner,
                                groupMember
                            }
                        }
                    }
                });
            }
        });
    }


    deleteGroup(stGroupPartialData: StGroupPartialData): Observable<FetchResult<DeleteGroupMutation>> {
        return this.deleteGroupGQL.mutate({
            groupId: stGroupPartialData.groupId,
            uid: this.authService.user.uid
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                deleteGroup: true
            },
            update: (store: DataProxy, {data: {deleteGroup}}) => {
                const user = store.readQuery<AuthenticateUserQuery>({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    }
                });

                const groupOwner = user.authenticateUser.groups.groupOwner.filter(x => x.groupId !== stGroupPartialData.groupId);
                const groupMember = user.authenticateUser.groups.groupMember.filter(x => x.groupId !== stGroupPartialData.groupId);

                // update cache
                store.writeQuery({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    },
                    data: {
                        ...user,
                        authenticateUser: {
                            ...user.authenticateUser,
                            groups: {
                                ...user.authenticateUser.groups,
                                groupOwner,
                                groupMember
                            }
                        }
                    }
                });
            }
        });
    }


    /**
     * Send or cancel already existing invitation request to group
     */
    toggleInvitationRequestToGroup(stGroupPartialData: StGroupPartialData): Observable<FetchResult<ToggleInvitationRequestToGroupMutation>> {
        return this.toggleInvitationRequestToGroupGQL.mutate({
            groupId: stGroupPartialData.groupId,
            uid: this.authService.user.uid
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                toggleInvitationRequestToGroup: {
                    ...stGroupPartialData
                }
            },
            update: (store: DataProxy, {data: {toggleInvitationRequestToGroup}}) => {
                const user = store.readQuery<AuthenticateUserQuery>({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    }
                });

                let groupInvitationSent;
                if (user.authenticateUser.groups.groupInvitationSent.map(x => x.groupId).includes(stGroupPartialData.groupId)) {
                    // already sent invitation -> cancel it
                    groupInvitationSent = user.authenticateUser.groups.groupInvitationSent.filter(x => x.groupId !== stGroupPartialData.groupId);
                } else {
                    // sent invitation request to group
                    groupInvitationSent = [...user.authenticateUser.groups.groupInvitationSent, toggleInvitationRequestToGroup];
                }


                // update cache
                store.writeQuery({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    },
                    data: {
                        ...user,
                        authenticateUser: {
                            ...user.authenticateUser,
                            groups: {
                                ...user.authenticateUser.groups,
                                groupInvitationSent
                            }
                        }
                    }
                });

            }
        });
    }

    /**
     * if user got group invitation, accept or deny request
     */
    answerReceivedGroupInvitation(stGroupPartialData: StGroupPartialData, accept: boolean): Observable<FetchResult<AnswerReceivedGroupInvitationMutation>> {
        return this.answerReceivedGroupInvitationGQL.mutate({
            groupId: stGroupPartialData.groupId,
            accept,
            uid: this.authService.user.uid
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                answerReceivedGroupInvitation: {
                    ...stGroupPartialData
                }
            },
            update: (store: DataProxy, {data: {answerReceivedGroupInvitation}}) => {
                const user = store.readQuery<AuthenticateUserQuery>({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    }
                });

                // remove invitation
                const groups = user.authenticateUser.groups;
                const groupInvitationReceived = groups.groupInvitationReceived.filter(x => x.groupId !== stGroupPartialData.groupId);
                const groupMember = accept ? [...groups.groupMember, answerReceivedGroupInvitation] : [...groups.groupMember];

                // update cache
                store.writeQuery({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    },
                    data: {
                        ...user,
                        authenticateUser: {
                            ...user.authenticateUser,
                            groups: {
                                ...user.authenticateUser.groups,
                                groupInvitationReceived,
                                groupMember
                            }
                        }
                    }
                });
            }
        });
    }


    leaveGroup(groupId: string): Observable<FetchResult<LeaveGroupMutation>> {
        return this.leaveGroupGQL.mutate({
            groupId,
            uid: this.authService.user.uid
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                leaveGroup: true
            },
            update: (store: DataProxy, {data: {leaveGroup}}) => {
                const user = store.readQuery<AuthenticateUserQuery>({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    }
                });

                // update cache
                store.writeQuery({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.authService.user.uid
                    },
                    data: {
                        ...user,
                        authenticateUser: {
                            ...user.authenticateUser,
                            groups: {
                                ...user.authenticateUser.groups,
                                groupMember: this.authService.user.groups.groupMember.filter(x => x.groupId !== groupId)
                            }
                        }
                    }
                });
            }
        });
    }
}
