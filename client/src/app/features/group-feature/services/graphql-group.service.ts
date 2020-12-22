import {Injectable} from '@angular/core';
import {AuthFeatureService} from '../../auth-feature/services/auth-feature.service';
import {
    AuthenticateUserDocument,
    AuthenticateUserQuery,
    CreateGroupGQL,
    CreateGroupMutation, Maybe,
    StGroupAllDataInput,
    StGroupPartialData
} from '../../../api/customGraphql.service';
import {Observable} from 'rxjs';
import {FetchResult} from '@apollo/client';
import {DataProxy} from '@apollo/client/cache/core/types/DataProxy';

@Injectable({
    providedIn: 'root'
})
export class GraphqlGroupService {

    constructor(private authService: AuthFeatureService,
                private createGroupGQL: CreateGroupGQL) {
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
}
