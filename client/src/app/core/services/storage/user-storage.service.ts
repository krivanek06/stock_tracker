import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Maybe, StStockWatchlistFragmentFragment, StUserIndetification, StUserPublicData, User_Roles_Enum } from '../../graphql-schema';

@Injectable({
	providedIn: 'root',
})
export class UserStorageService {
	private user$: BehaviorSubject<StUserPublicData> = new BehaviorSubject<StUserPublicData>(null);
	private authenticating$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

	constructor() {}

	get user(): StUserPublicData {
		if (!this.user$.getValue()) {
			throw new Error('trying to access StUserPublicData, but does not exists');
		}

		return this.user$.getValue();
	}

	get userIdentification(): StUserIndetification {
		const user = this.user;
		return {
			id: user.id,
			accountCreatedDate: user.accountCreatedDate,
			nickName: user.nickName,
			photoURL: user.photoURL,
			locale: user.locale,
			__typename: 'STUserIndetification',
		};
	}

	get isAuthenticating(): boolean {
		return this.authenticating$.getValue();
	}

	getUserIdentification(): Observable<StUserIndetification> {
		return this.getUser().pipe(
			map((user) => {
				if (!user) {
					return null;
				}
				return {
					id: user.id,
					accountCreatedDate: user.accountCreatedDate,
					nickName: user.nickName,
					photoURL: user.photoURL,
					locale: user.locale,
					__typename: 'STUserIndetification',
				};
			})
		);
	}

	getUser(): Observable<StUserPublicData> {
		return this.user$.asObservable();
	}

	getUserNotNull(): Observable<StUserPublicData> {
		return this.getUser().pipe(filter((user) => !!user));
	}

	setUser(user: StUserPublicData) {
		this.user$.next(user);
	}

	getIsAuthenticating(): Observable<boolean> {
		return this.authenticating$.asObservable();
	}

	setIsAuthenticating(isAuthentication: boolean) {
		this.authenticating$.next(isAuthentication);
	}

	isAdmin(): Observable<boolean> {
		return this.getUser().pipe(map((user) => user?.userPrivateData?.roles.includes(User_Roles_Enum.RoleAdmin)));
	}

	hasRoleCreateGroup(): Observable<boolean> {
		return this.getUser().pipe(map((user) => user?.userPrivateData?.roles.includes(User_Roles_Enum.RoleGroupCreate)));
	}

	getUserWatchlists(): Observable<Array<Maybe<{ __typename?: 'STStockWatchlist' } & StStockWatchlistFragmentFragment>> | null> {
		return this.getUser().pipe(map((u) => u?.stockWatchlist));
	}
}
