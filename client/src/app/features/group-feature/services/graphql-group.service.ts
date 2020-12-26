import {Injectable} from '@angular/core';
import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';
import {
    AuthenticateUserDocument,
    AuthenticateUserQuery,
    CreateGroupGQL,
    CreateGroupMutation, EditGroupGQL, EditGroupMutation, Maybe, QueryStGroupAllDataByGroupIdGQL, StGroupAllData,
    StGroupAllDataInput,
    StGroupPartialData
} from '../../../api/customGraphql.service';
import {Observable} from 'rxjs';
import {FetchResult} from '@apollo/client';
import {DataProxy} from '@apollo/client/cache/core/types/DataProxy';
import {map} from 'rxjs/operators';
import {group} from '@angular/animations';
import {FetchPolicy} from '@apollo/client/core/watchQueryOptions';

@Injectable({
    providedIn: 'root'
})
export class GraphqlGroupService {

    constructor(private authService: AuthFeatureService,
                private queryStGroupAllDataByGroupIdGQL: QueryStGroupAllDataByGroupIdGQL,
                private editGroupGQL: EditGroupGQL,
                private createGroupGQL: CreateGroupGQL) {
    }

    querySTGroupAllDataByGroupId(groupId: string, loadFromNetwork = false): Observable<StGroupAllData> {
        return this.queryStGroupAllDataByGroupIdGQL.fetch({
            groupId
        }, {
            fetchPolicy: 'network-only' // loadFromNetwork ? 'network-only' : 'cache-first'
        }).pipe(map(res => res.data.querySTGroupAllDataByGroupId));
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
}
