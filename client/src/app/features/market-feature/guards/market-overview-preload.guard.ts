import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { GraphqlQueryService } from '@core';
import { first } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class MarketOverviewPreloadGuard implements Resolve<boolean> {
	constructor(private graphqlQueryService: GraphqlQueryService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		this.graphqlQueryService.queryStMarketHistoryOverview().pipe(first()).subscribe();
		return true;
	}
}
