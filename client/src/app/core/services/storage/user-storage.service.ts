import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {Maybe, StStockWatchlistFragmentFragment, StUserIndetification, StUserPublicData,} from '../../graphql-schema';
import {map} from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class UserStorageService {
    private user$: BehaviorSubject<StUserPublicData> = new BehaviorSubject<StUserPublicData>(null);

    constructor() {
    }

    get user(): StUserPublicData {
        if (!this.user$.getValue()) {
            throw new Error('trying to access StUserPublicData, but does not exists');
        }

        return this.user$.getValue();
    }

    get userIdentification(): StUserIndetification {
        const user = this.user;
        return {
            uid: user.uid,
            accountCreatedDate: user.accountCreatedDate,
            nickName: user.nickName,
            photoURL: user.photoURL,
            locale: user.locale,
            __typename: 'STUserIndetification'
        };
    }

    getUser(): Observable<StUserPublicData> {
        return this.user$.asObservable();
    }

    setUser(user: StUserPublicData) {
        this.user$.next(user);
    }

    getUserWatchlists(): Observable<Array<Maybe<{ __typename?: 'STStockWatchlist' } & StStockWatchlistFragmentFragment>> | null> {
        return this.getUser().pipe(map(u => u.stockWatchlist));
    }
}
