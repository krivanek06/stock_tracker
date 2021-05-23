import {Injectable} from '@angular/core';
import {QueryUsersRegistrationGQL, StUserRegistrationDoc} from '../graphql-schema';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GraphqlAdminService {

    constructor(private queryUsersRegistrationGQL: QueryUsersRegistrationGQL) {
    }

    queryUsersRegistration(): Observable<StUserRegistrationDoc> {
        return this.queryUsersRegistrationGQL.fetch().pipe(map(x => x.data.queryUsersRegistration));
    }
}
