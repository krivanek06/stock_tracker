import {Injectable} from '@angular/core';
import {QueryAdminMainInformationsGQL, StAdminMainInformations} from '../graphql-schema';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class GraphqlAdminService {

    constructor(private queryAdminMainInformationsGQL: QueryAdminMainInformationsGQL) {
    }

    queryAdminMainInformations(): Observable<StAdminMainInformations> {
        return this.queryAdminMainInformationsGQL.fetch().pipe(map(x => x.data.queryAdminMainInformations));
    }
}
