import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Apollo } from 'apollo-angular';
import { default as auth, default as firebase } from 'firebase';
import { Subject } from 'rxjs';
import { filter, first, map, takeUntil } from 'rxjs/operators';
import { AuthenticateUserGQL, RegisterUserGQL, StUserAuthenticationInput, StUserPublicData } from '../graphql-schema';
import { LoginIUser, RegisterIUser } from '../model';
import { UserStorageService } from './storage/user-storage.service';
import UserCredential = firebase.auth.UserCredential;

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private logout$: Subject<boolean> = new Subject<boolean>();

	constructor(
		private userStorageService: UserStorageService,
		private apollo: Apollo,
		private authenticateUserGQL: AuthenticateUserGQL,
		private registerUserGQL: RegisterUserGQL,
		private afAuth: AngularFireAuth
	) {
		// check if user is cached and automatically authenticate
		this.afAuth.authState
			.pipe(
				first(),
				filter((x) => !!x)
			)
			.subscribe((user) => this.initUserIfExists(user.uid));
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

	async logout(): Promise<void> {
		console.log('logging out');
		this.userStorageService.setUser(null);
		this.logout$.next(true);
		localStorage.removeItem('requesterUserId');
		// await this.apollo.getClient().clearStore();
		await this.apollo.client.resetStore();
		await this.afAuth.signOut();
	}

	private initUserIfExists(userId: string) {
		console.log(`Init user ${userId}`);

		// user already logged in - init skeleton till he is loaded
		this.afAuth.user.subscribe((u) => {
			this.userStorageService.setIsAuthenticating(!!u);
		});

		// if store change, write data to user storage
		this.authenticateUserGQL
			.watch(
				{ id: userId },
				{
					nextFetchPolicy: 'cache-only',
				}
			)
			.valueChanges.pipe(
				//filter((x) => !!x.data),
				map((x) => x?.data?.authenticateUser),
				//filter((x) => !!x),
				//catchError(() => of('asddass')),
				takeUntil(this.logout$)
			)
			.subscribe((user) => {
				if (!user) {
					this.logout();
					return;
				}
				console.log('updating user');
				localStorage.setItem('requesterUserId', user.id);
				console.log('useruser', user);
				this.userStorageService.setUser(user as StUserPublicData);
				this.userStorageService.setIsAuthenticating(false);
			});
	}

	private async signInUser(credential: UserCredential): Promise<void> {
		if (credential.additionalUserInfo.isNewUser) {
			const profile = credential.additionalUserInfo.profile as any;
			const stUserAuthenticationInput: StUserAuthenticationInput = {
				displayName: credential.user.displayName || credential.user.email.split('@')[0],
				email: credential.user.email,
				uid: credential.user.uid,
				photoURL: credential.user.photoURL,
				providerId: credential.user.providerId,
				locale: profile?.locale,
			};

			await this.registerUserGQL.mutate({ stUserAuthenticationInput }).toPromise();
		}
		this.initUserIfExists(credential.user.uid);
	}
}
