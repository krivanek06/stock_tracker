import {Injectable} from '@angular/core';
import {filter, map} from 'rxjs/operators';
import {Apollo} from 'apollo-angular';
import {Router} from '@angular/router';
import auth from 'firebase';
import firebase from 'firebase';
import {AngularFireAuth} from '@angular/fire/auth';
import UserCredential = firebase.auth.UserCredential;
import {UserStorageService} from './storage/user-storage.service';
import {AuthenticateUserGQL, RegisterUserGQL, StUserAuthenticationInput} from '../graphql-schema';
import {LoginIUser, RegisterIUser} from '../model';

@Injectable({
    providedIn: 'root'
})
export class AuthenticationService {

    constructor(private userStorageService: UserStorageService,
                private apollo: Apollo,
                private router: Router,
                private authenticateUserGQL: AuthenticateUserGQL,
                private registerUserGQL: RegisterUserGQL,
                private afAuth: AngularFireAuth) {
        this.afAuth.authState.pipe(
            filter(x => !!x),
        ).subscribe(user => this.initUserIfExists(user.uid));
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
        this.userStorageService.setUser(null);
        await this.apollo.getClient().clearStore();
        await this.afAuth.signOut();
        await this.router.navigate(['/login']);
    }

    private initUserIfExists(userId: string) {
        this.authenticateUserGQL.watch({uid: userId}).valueChanges.pipe(
            filter(x => !!x.data),
            map(x => x.data.authenticateUser),
            filter(x => !!x),
        ).subscribe(user => {
            console.log('user exists');
            /*if (user && !this.user$.getValue()) {
                this.router.navigate(['/menu/dashboard']);
            }*/
            this.userStorageService.setUser(user);
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
            this.initUserIfExists(credential.user.uid);
        }
    }
}