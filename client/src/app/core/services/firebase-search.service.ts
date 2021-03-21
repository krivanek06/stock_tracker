import {Injectable} from '@angular/core';
import {
    QueryStGroupPartialDataByGroupNameGQL,
    QueryStockSummariesGQL,
    QueryStUserPartialInformationByUsernameGQL,
    StGroupPartialData,
    StUserPartialInformation,
    Summary,
} from '../api';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {UserStorageService} from './storage/user-storage.service';

@Injectable({
    providedIn: 'root'
})
export class FirebaseSearchService {

    constructor(private userStorageService: UserStorageService,
                private queryStUserPartialInformationByUsernameGQL: QueryStUserPartialInformationByUsernameGQL,
                private groupPartialDataByGroupNameGQL: QueryStGroupPartialDataByGroupNameGQL,
                private queryStockSummariesGQL: QueryStockSummariesGQL) {
    }


    queryUserPartialInformationByUsername(usernamePrefix: string): Observable<StUserPartialInformation[]> {
        return this.queryStUserPartialInformationByUsernameGQL.fetch({
            usernamePrefix
        }).pipe(map(x => x.data.querySTUserPartialInformationByUsername));
    }

    queryStockSummaries(symbolPrefix: string): Observable<Summary[]> {
        return this.queryStockSummariesGQL.fetch({
            symbolPrefix
        }).pipe(map(x => x.data.queryStockSummaries.summaries));
    }

    querySTGroupPartialDataByGroupName(groupName: string): Observable<StGroupPartialData[]> {
        return this.groupPartialDataByGroupNameGQL.fetch({
            groupName
        }).pipe(map(x => x.data.querySTGroupPartialDataByGroupName.groups));
    }
}
