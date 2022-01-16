import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlUserService, StUserIdentificationDataFragment, StUserPublicDataSearchFragment } from '@core';
import { TradingFeatureFacadeService } from '@stock-trading-feature';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-search-user-page',
	templateUrl: './search-user-page.component.html',
	styleUrls: ['./search-user-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchUserPageComponent implements OnInit {
	userPublicDataSearchFragment$!: Observable<StUserPublicDataSearchFragment | null | undefined> | null;
	//tradingChangeWrapper: PortfolioHistoricalWrapper[] = [];
	isLoading = false;
	isSearchEmpty = true;
	constructor(private graphqlUserService: GraphqlUserService, private tradingFeatureFacadeService: TradingFeatureFacadeService) {}

	// get balance$(): Observable<number> | undefined {
	// 	return this.userPublicDataSearchFragment$?.pipe(
	// 		map((user) => {
	// 			const invested = user?.portfolio?.lastPortfolioSnapshot?.portfolioInvested || 0;
	// 			const portfolioCash = user?.portfolio?.lastPortfolioSnapshot?.portfolioCash || 0;

	// 			return invested + portfolioCash;
	// 		})
	// 	);
	// }

	ngOnInit() {}

	showUserInformation(userPartialInformation: StUserIdentificationDataFragment) {
		this.isLoading = true;
		this.isSearchEmpty = false;

		this.userPublicDataSearchFragment$ = this.graphqlUserService.queryStUserPublicDataSearch(userPartialInformation.id);

		this.userPublicDataSearchFragment$.pipe(first()).subscribe((userPublicData) => {
			this.isLoading = false;
			// if (userPublicData) {
			// 	this.tradingChangeWrapper = this.tradingFeatureFacadeService.createPortfolioHistoricalWrappers(
			// 		userPublicData.userHistoricalData.portfolioSnapshots as StPortfolioSnapshot[],
			// 		[TIME_INTERVAL_ENUM.DAILY, TIME_INTERVAL_ENUM.WEEKLY, TIME_INTERVAL_ENUM.MONTHLY, TIME_INTERVAL_ENUM.FROM_BEGINNING]
			// 	);
			// }
		});
	}

	clearResult() {
		this.userPublicDataSearchFragment$ = null;
		this.isSearchEmpty = true;
	}
}
