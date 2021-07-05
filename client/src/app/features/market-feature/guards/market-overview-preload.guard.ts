import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GraphqlQueryService, StMarketOverviewPartialData} from '@core';

@Injectable({
    providedIn: 'root'
})
export class MarketOverviewPreloadGuard implements Resolve<StMarketOverviewPartialData> {
    constructor(private graphqlQueryService: GraphqlQueryService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<StMarketOverviewPartialData> | Promise<StMarketOverviewPartialData> | StMarketOverviewPartialData {
        return this.graphqlQueryService.queryStMarketHistoryOverview();
    }

}
