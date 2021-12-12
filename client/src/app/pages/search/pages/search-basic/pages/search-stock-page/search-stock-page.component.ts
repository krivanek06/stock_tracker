import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { GraphqlQueryService, StfmStockScreenerInput, StfmStockScreenerResultWrapper } from '@core';
import { IonInfiniteScroll } from '@ionic/angular';
import { SymbolIdentification } from '@shared';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-search-stock-page',
	templateUrl: './search-stock-page.component.html',
	styleUrls: ['./search-stock-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchStockPageComponent implements OnInit {
	stockScreenerResult: StfmStockScreenerResultWrapper | null = null;
	stockScreener: StfmStockScreenerInput | null = null;

	limit = 50;
	@ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;
	private offset: number = 0;

	constructor(
		private graphqlQueryService: GraphqlQueryService,
		private watchlistFeatureFacadeService: WatchlistFeatureFacadeService,
		private cd: ChangeDetectorRef
	) {}

	ngOnInit() {
		this.showMarketDailyOverview();
	}
	changedFormResult(stockScreener: StfmStockScreenerInput) {
		this.stockScreener = stockScreener;
	}

	showSummarySymbol(symbolIdentification: SymbolIdentification) {
		this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, true);
	}

	filterResult() {
		this.offset = 0;
		this.stockScreenerResult = null;
		this.toggleInfiniteScroll();
		this.loadData(null, 0);
	}

	loadData(event: any, offset: number): void {
		this.offset = this.offset + offset;
		console.log('load', this.offset);
		this.graphqlQueryService.queryStockScreener(this.stockScreener as StfmStockScreenerInput, this.offset, this.limit).subscribe((res) => {
			console.log(res);
			this.stockScreenerResult = this.stockScreenerResult
				? { ...this.stockScreenerResult, result: [...(this.stockScreenerResult.result || []), ...(res.result || [])] }
				: res;
			this.cd.detectChanges();

			if (event) {
				event.target.complete();
			}

			if (this.offset + this.limit > (this.stockScreenerResult.found || 0)) {
				this.toggleInfiniteScroll();
			}
		});
	}

	toggleInfiniteScroll(): void {
		this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
	}

	private showMarketDailyOverview(): void {
		this.graphqlQueryService
			.queryMarketDailyOverview()
			.pipe(
				map((res) => {
					return {
						result: res.stockScreener,
						limit: this.limit,
						offset: 0,
						__typename: 'STFMStockScreenerResultWrapper',
					} as StfmStockScreenerResultWrapper;
				})
			)
			.subscribe((res) => {
				this.stockScreenerResult = res;
				this.toggleInfiniteScroll();
				this.cd.detectChanges();
			});
	}
}
