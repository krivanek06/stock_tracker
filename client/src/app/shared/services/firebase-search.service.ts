import {Injectable} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {
    QueryStUserPartialInformationByUsernameGQL,
    StUserPartialInformation,
} from '../../api/customGraphql.service';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class FirebaseSearchService {

    constructor(private authService: AuthFeatureService,
                private queryStUserPartialInformationByUsernameGQL: QueryStUserPartialInformationByUsernameGQL) {
    }


    queryUserPartialInformationByUsername(usernamePrefix: string): Observable<StUserPartialInformation[]> {
        return this.queryStUserPartialInformationByUsernameGQL.fetch({
            usernamePrefix
        }).pipe(map(x => x.data.querySTUserPartialInformationByUsername));
    }
}
