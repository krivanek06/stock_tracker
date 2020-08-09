import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {map, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {QueryUserGQL, UpdateUserDataGQL, User} from '../../../api/customGraphql.service';
import {IUser} from '../model/userModel';

@Injectable({
    providedIn: 'root'
})
export class AuthFeatureService {

    constructor(private afAuth: AngularFireAuth,
                private queryUserGQL: QueryUserGQL,
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
}
