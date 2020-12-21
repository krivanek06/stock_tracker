import {Apollo} from 'apollo-angular';

import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {filter, map, switchMap, tap} from 'rxjs/operators';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {
    AuthenticateUserGQL,
    RegisterUserGQL, StUserAuthenticationInput, StUserPublicData,
} from '../../../api/customGraphql.service';
import {LoginIUser, RegisterIUser, USER_ACTIVITY} from '../model/userModel';

import {Router} from '@angular/router';
import auth from 'firebase';
import firebase from 'firebase';
import UserCredential = firebase.auth.UserCredential;


@Injectable({
    providedIn: 'root'
})
export class AuthFeatureService {
    private user$: BehaviorSubject<StUserPublicData> = new BehaviorSubject<StUserPublicData>(null);

    constructor(private afAuth: AngularFireAuth,
                private apollo: Apollo,
                private router: Router,
                private authenticateUserGQL: AuthenticateUserGQL,
                private registerUserGQL: RegisterUserGQL) {
        this.initUserIfExists();
    }

    getUser(): Observable<StUserPublicData> {
        return this.user$.asObservable();
    }

    get user(): StUserPublicData {
        if (!this.user$.getValue()) {
            throw new Error('trying to access StUserPublicData, but does not exists');
        }

        return this.user$.getValue();
    }

    async googleSignIn(): Promise<void> {
        const provider = new auth.auth.GoogleAuthProvider();
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
        /*await this.getUser().pipe(
            switchMap(user => this.registerUserGQL.mutate({
                stUserAuthenticationInput: {
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
        ).toPromise();*/
        this.user$.next(null);
        await this.apollo.getClient().clearStore();
        await this.afAuth.signOut();
        await this.router.navigate(['/login']);
    }

    /*updateUserPrivateData(userPrivateData: UserPrivateData): Observable<FetchResult<UpdateUserPrivateDataMutation, Record<string, any>, Record<string, any>>> {
        return this.getUser().pipe(
            switchMap(user => this.updateUserPrivateDataGQL.mutate({
                uid: user.uid,
                userPrivateDataInput: userPrivateData
            }))
        );
    }*/

    private initUserIfExists() {
        return this.afAuth.authState.pipe(
            filter(x => !!x),
            switchMap(user =>
                this.authenticateUserGQL.watch({uid: user.uid}).valueChanges.pipe(
                    map(x => x.data.authenticateUser)
                )),
            filter(x => !!x),
        ).subscribe(user => {
            if (user && !this.user$.getValue()) {
                this.router.navigate(['/menu/dashboard']);
            }
            this.user$.next(user);
        });
    }

    // ToDO create interceptor with token
    private async signInUser(credential: UserCredential): Promise<void> {
        if (credential.additionalUserInfo.isNewUser) {
            const profile = credential.additionalUserInfo.profile as any;
            const stUserAuthenticationInput: StUserAuthenticationInput = {
                displayName: credential.user.displayName || credential.user.email.split('@')[0],
                email: credential.user.email,
                uid: credential.user.uid,
                photoURL: credential.user.photoURL,
                providerId: credential.user.providerId,
                locale: profile?.locale
            };

            await this.registerUserGQL.mutate({stUserAuthenticationInput}).toPromise();
        }
    }
}
