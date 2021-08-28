import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlUserService, StUserIndentificationDataFragment, StUserPublicDataSearchFragment } from '@core';
import { PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM } from '@stock-trading-feature';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { TradingFeatureFacadeService } from './../../../../features/stock-trading-feature/services/trading-feature-facade.service';

@Component({
	selector: 'app-search-user-page',
	templateUrl: './search-user-page.component.html',
	styleUrls: ['./search-user-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchUserPageComponent implements OnInit {
	userPublicDataSearchFragment$: Observable<StUserPublicDataSearchFragment>;
	tradingChangeWrapper: PortfolioHistoricalWrapper[] = [];
	isLoading = false;
	isSearchEmpty = true;
	constructor(private graphqlUserService: GraphqlUserService, private tradingFeatureFacadeService: TradingFeatureFacadeService) {}

	ngOnInit() {}

	showUserInformation(userPartialInformation: StUserIndentificationDataFragment) {
		this.isLoading = true;
		this.isSearchEmpty = false;

		this.userPublicDataSearchFragment$ = this.graphqlUserService.queryStUserPublicDataSearch(userPartialInformation.id);

		this.userPublicDataSearchFragment$.pipe(first()).subscribe((userPublicData) => {
			this.isLoading = false;

			this.tradingChangeWrapper = this.tradingFeatureFacadeService.createPortfolioHistoricalWrappers(
				userPublicData.userHistoricalData.portfolioSnapshots,
				[TIME_INTERVAL_ENUM.DAILY, TIME_INTERVAL_ENUM.WEEKLY, TIME_INTERVAL_ENUM.MONTHLY, TIME_INTERVAL_ENUM.FROM_BEGINNING]
			);
		});
	}

	clearResult() {
		this.userPublicDataSearchFragment$ = null;
		this.isSearchEmpty = true;
	}
}
