import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {map, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {
    QueryUserGQL,
    UpdateUserDataGQL,
    UpdateUserPrivateDataGQL,
    UpdateUserPrivateDataMutation,
    User
} from '../../../api/customGraphql.service';
import {IUser, UserPrivateData} from '../model/userModel';
import {FetchResult} from 'apollo-link';

@Injectable({
    providedIn: 'root'
})
export class AuthFeatureService {

    constructor(private afAuth: AngularFireAuth,
                private queryUserGQL: QueryUserGQL,
                private updateUserPrivateDataGQL: UpdateUserPrivateDataGQL,
                private updateUserDataGQL: UpdateUserDataGQL) {

    }

    getUser(): Observable<IUser> {
        return this.afAuth.authState.pipe(
            tap(x => console.log('auth state', x)),
            switchMap(user => {
                if (user) {
                    return this.queryUserGQL.watch({
                        uid: user.uid
                    }).valueChanges.pipe(map(x => x.data.queryUser));
                }
                return of(null);
            })
        );
    }

    async googleSignIn(): Promise<({ __typename?: 'User' } & Pick<User, 'uid' | 'displayName' | 'email' | 'photoURL' | 'nickname'>) | null> {
        const provider = new auth.GoogleAuthProvider();
        const credentials = await this.afAuth.signInWithPopup(provider);

        const profile = credentials.additionalUserInfo.profile as any;
        const user = await this.updateUserDataGQL.mutate({
            userInput: {
                displayName: credentials.user.displayName,
                email: credentials.user.email,
                nickname: undefined,
                uid: credentials.user.uid,
                photoURL: credentials.user.photoURL,
                providerId: credentials.user.providerId,
                locale: profile?.locale
            }
        }).toPromise();

        return user.data.updateUserData;
    }

    updateUserPrivateData(userPrivateData: UserPrivateData): Observable<FetchResult<UpdateUserPrivateDataMutation, Record<string, any>, Record<string, any>>> {
        return this.getUser().pipe(
            switchMap(user => this.updateUserPrivateDataGQL.mutate({
                uid: user.uid,
                userPrivateDataInput: userPrivateData
            }))
        );
    }
}
