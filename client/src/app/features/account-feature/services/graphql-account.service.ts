import {Injectable} from '@angular/core';
import {
    AuthenticateUserDocument,
    AuthenticateUserQuery,
    EditUserGQL,
    EditUserMutation,
    ResetUserAccountGQL,
    ResetUserAccountMutation,
    StUserEditDataInput,
    UserStorageService
} from '@core';
import {DataProxy} from '@apollo/client/cache/core/types/DataProxy';
import {Observable} from 'rxjs';
import {FetchResult} from '@apollo/client';
import {resetedPortfolio} from '../models';

@Injectable({
    providedIn: 'root'
})
export class GraphqlAccountService {

    constructor(private userStorageService: UserStorageService,
                private editUserGQL: EditUserGQL,
                private resetUserAccountGQL: ResetUserAccountGQL) {
    }


    editUser(editInput: StUserEditDataInput): Observable<FetchResult<EditUserMutation>> {
        return this.editUserGQL.mutate({
            editInput: {
                userId: editInput.userId,
                photoURL: editInput.photoURL,
                nickName: editInput.nickName,
                finnhubKey: editInput.finnhubKey
            }
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                editUser: true
            },
            update: (store: DataProxy, {data: {editUser}}) => {
                const data = store.readQuery<AuthenticateUserQuery>({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.userStorageService.user.uid
                    }
                });

                const initPortfolio = !data.authenticateUser.userPrivateData.tradingEnabledDate && !!editInput.finnhubKey;

                // update watchlist inside cache
                store.writeQuery({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.userStorageService.user.uid
                    },
                    data: {
                        ...data,
                        authenticateUser: {
                            ...data.authenticateUser,
                            photoURL: editInput.photoURL,
                            nickName: editInput.nickName,
                            portfolio: initPortfolio ? resetedPortfolio() : data.authenticateUser.portfolio,
                            userPrivateData: {
                                ...data.authenticateUser.userPrivateData,
                                finnhubKey: editInput.finnhubKey
                            }
                        }
                    }
                });
            }
        });
    }

    resetUserAccount(): Observable<FetchResult<ResetUserAccountMutation>> {
        return this.resetUserAccountGQL.mutate({
            userId: this.userStorageService.user.uid
        }, {
            optimisticResponse: {
                __typename: 'Mutation',
                resetUserAccount: true
            },
            update: (store: DataProxy, {data: {resetUserAccount}}) => {
                const data = store.readQuery<AuthenticateUserQuery>({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.userStorageService.user.uid
                    }
                });

                const portfolio = data.authenticateUser.portfolio;
                // update watchlist inside cache
                store.writeQuery({
                    query: AuthenticateUserDocument,
                    variables: {
                        uid: this.userStorageService.user.uid
                    },
                    data: {
                        ...data,
                        authenticateUser: {
                            ...data.authenticateUser,
                            portfolio: resetedPortfolio(),
                            holdings: [],
                            userHistoricalData: {
                                ...data.authenticateUser.userHistoricalData,
                                resetedAccount: [...data.authenticateUser.userHistoricalData.resetedAccount, {
                                    __typename: 'STUserResetedAccount',
                                    date: new Date().toISOString(),
                                    portfolioTotal: portfolio.portfolioCash + portfolio.portfolioInvested
                                }],
                            }
                        }
                    }
                });
            }
        });
    }
}
