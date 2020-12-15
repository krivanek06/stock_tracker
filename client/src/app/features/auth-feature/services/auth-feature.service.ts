import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {auth} from 'firebase/app';
import {map, switchMap, tap} from 'rxjs/operators';
import {Observable, of} from 'rxjs';
import {
    QueryUserGQL, RegisterUserGQL,
    UpdateUserDataGQL,
    UpdateUserPrivateDataGQL,
    UpdateUserPrivateDataMutation,
    User
} from '../../../api/customGraphql.service';
import {IUser, LoginIUser, RegisterIUser, USER_ACTIVITY, USER_STATUS, UserPrivateData} from '../model/userModel';
import {FetchResult} from 'apollo-link';
import UserCredential = firebase.auth.UserCredential;
import {Apollo} from 'apollo-angular';
import {Router} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class AuthFeatureService {

    constructor(private afAuth: AngularFireAuth,
                private apollo: Apollo,
                private router: Router,
                private queryUserGQL: QueryUserGQL,
                private updateUserPrivateDataGQL: UpdateUserPrivateDataGQL,
                private registerUserGQL: RegisterUserGQL,
                private updateUserDataGQL: UpdateUserDataGQL) {

    }

    // TODO opravit
    getUser(): Observable<IUser> {
        return this.afAuth.authState.pipe(
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

    async googleSignIn(): Promise<void> {
        const provider = new auth.GoogleAuthProvider();
        const credentials = await this.afAuth.signInWithPopup(provider);
        await this.signInUser(credentials);
    }

    async normalRegistration(registerIUser: RegisterIUser) {
        const credentials = await this.afAuth.createUserWithEmailAndPassword(registerIUser.email, registerIUser.password1);
        await this.signInUser(credentials);
    }

    async normalLogin(loginIUser: LoginIUser) {
        const credentials = await this.afAuth.signInWithEmailAndPassword(loginIUser.email, loginIUser.password);
        await this.signInUser(credentials);
    }

    async logout() {
        await this.getUser().pipe(
            switchMap(user => this.registerUserGQL.mutate({
                userInput: {
                    uid: user.uid,
                    locale: user.locale,
                    providerId: user.providerId,
                    photoURL: user.photoURL,
                    nickname: user.nickname,
                    email: user.email,
                    displayName: user.displayName,
                    activity: USER_ACTIVITY.SIGNED_OUT
                }
            }))
        ).toPromise();
        await this.apollo.getClient().clearStore();
        await this.afAuth.signOut();
        await this.router.navigate(['/login']);
    }

    updateUserPrivateData(userPrivateData: UserPrivateData): Observable<FetchResult<UpdateUserPrivateDataMutation, Record<string, any>, Record<string, any>>> {
        return this.getUser().pipe(
            switchMap(user => this.updateUserPrivateDataGQL.mutate({
                uid: user.uid,
                userPrivateDataInput: userPrivateData
            }))
        );
    }

    // ToDO create interceptor with token
    private async signInUser(credential: UserCredential): Promise<void> {
        console.log('credential', credential.user.metadata.creationTime);
        console.log('credential.additionalUserInfo', credential.additionalUserInfo);
        console.log('credential.additionalUserInfo.profile', credential.additionalUserInfo.profile);

        //credential.user.metadata.creationTime
        //credential.user.metadata.lastSignInTime
        if (credential.additionalUserInfo.isNewUser) {
            const profile = credential.additionalUserInfo.profile as any;
            const userInput: IUser = {
                displayName: credential.user.displayName || credential.user.email.split('@')[0],
                email: credential.user.email,
                uid: credential.user.uid,
                photoURL: credential.user.photoURL,
                providerId: credential.user.providerId,
                locale: profile?.locale
            };

            const user = await this.registerUserGQL.mutate({userInput}).toPromise();
            console.log('new user', user.data.registerUser);
        } else {
           // const user = await this.updateUserDataGQL.mutate({userInput}).toPromise();
            //console.log('old user', user.data.updateUserData);
        }
    }
}
