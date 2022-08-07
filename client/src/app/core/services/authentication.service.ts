import { Injectable } from '@angular/core';
import {
	Auth,
	authState,
	createUserWithEmailAndPassword,
	GoogleAuthProvider,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signInWithPopup,
	UserCredential,
} from '@angular/fire/auth';
import { Apollo } from 'apollo-angular';
import { Observable, Subject } from 'rxjs';
import { filter, first, map, takeUntil } from 'rxjs/operators';
import { AuthenticateUserGQL, RegisterUserGQL, StUserAuthenticationInput, StUserPublicData } from '../graphql-schema';
import { LoginIUser, RegisterIUser } from '../model';
import { UserStorageService } from './storage/user-storage.service';

@Injectable({
	providedIn: 'root',
})
export class AuthenticationService {
	private logout$: Subject<boolean> = new Subject<boolean>();
	private readonly AUTH_KEY = 'AUTH_KEY';
	constructor(
		private userStorageService: UserStorageService,
		private apollo: Apollo,
		private authenticateUserGQL: AuthenticateUserGQL,
		private registerUserGQL: RegisterUserGQL,
		private afAuth: Auth
	) {
		// check if user is cached and automatically authenticate
		authState(this.afAuth)
			.pipe(
				first(),
				filter((x) => !!x)
			)
			.subscribe((user) => this.initUserIfExists(user?.uid));
	}

	async googleSignIn(): Promise<void> {
		const provider = new GoogleAuthProvider();
		const credentials = await signInWithPopup(this.afAuth, provider);
		await this.signInUser(credentials);
	}

	async normalRegistration(registerIUser: RegisterIUser) {
		const credentials = await createUserWithEmailAndPassword(this.afAuth, registerIUser.email, registerIUser.password1);
		await this.signInUser(credentials);
	}

	async normalLogin(loginIUser: LoginIUser): Promise<boolean> {
		try {
			const credentials = await signInWithEmailAndPassword(this.afAuth, loginIUser.email, loginIUser.password);
			await this.signInUser(credentials);
			return true;
		} catch (e: any) {
			return false;
		}
	}

	async logout(): Promise<void> {
		console.log('logging out');
		this.userStorageService.setUser(null);
		this.logout$.next(true);
		localStorage.removeItem('requesterUserId');
		localStorage.removeItem(this.AUTH_KEY);
		// await this.apollo.getClient().clearStore();
		await this.apollo.client.resetStore();
		await this.afAuth.signOut();
	}

	private initUserIfExists(userId: string | null | undefined) {
		if (!userId) {
			return;
		}
		console.log(`Init user ${userId}`);

		// caching user for faster load time on develop
		console.log('Auth: loading user from localstorage');
		const userJson = localStorage.getItem(this.AUTH_KEY);
		if (userJson) {
			const parsedUser = JSON.parse(userJson);
			console.log('Auth: loaded user from localstorage', parsedUser);
			this.userStorageService.setUser(parsedUser as StUserPublicData);
			this.userStorageService.setIsAuthenticating(false);
		}

		// user already logged in - init skeleton till he is loaded
		const authStateChange = new Observable((observer: any) => onAuthStateChanged(this.afAuth, observer));
		authStateChange.subscribe((u) => {
			console.log('authenticated user', u);
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

				console.log('Auth: persisting user into localstorage');
				localStorage.setItem(this.AUTH_KEY, JSON.stringify(user));
			});
	}

	private async signInUser(credential: UserCredential): Promise<void> {
		const isNewUser = credential.user.metadata.creationTime === credential.user.metadata.lastSignInTime;

		if (isNewUser) {
			const stUserAuthenticationInput: StUserAuthenticationInput = {
				displayName: credential.user.displayName || credential.user?.email?.split('@')[0],
				email: credential.user.email,
				uid: credential.user.uid,
				photoURL: credential.user.photoURL,
				providerId: credential.user.providerId,
			};

			await this.registerUserGQL.mutate({ stUserAuthenticationInput }).toPromise();
		}
		this.initUserIfExists(credential.user.uid);
	}
}
