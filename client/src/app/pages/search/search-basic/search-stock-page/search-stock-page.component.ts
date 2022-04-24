import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { componentDestroyed, GraphqlQueryService, StfmStockScreenerInput, StfmStockScreenerResultWrapper, waitFor } from '@core';
import { SymbolIdentification } from '@shared';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';
import { BehaviorSubject, Subject, switchMap, withLatestFrom } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-search-stock-page',
	templateUrl: './search-stock-page.component.html',
	styleUrls: ['./search-stock-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchStockPageComponent implements OnInit, OnDestroy {
	showLoader$: Subject<boolean> = new Subject<boolean>();
	stockScreener$: Subject<StfmStockScreenerInput> = new Subject<StfmStockScreenerInput>();
	stockScreenerResult$: BehaviorSubject<StfmStockScreenerResultWrapper> = new BehaviorSubject<StfmStockScreenerResultWrapper>(
		{} as StfmStockScreenerResultWrapper
	);
	private offset$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

	constructor(
		private graphqlQueryService: GraphqlQueryService,
		private watchlistFeatureFacadeService: WatchlistFeatureFacadeService,
		private cd: ChangeDetectorRef
	) {}

	get canShowMore(): boolean {
		return this.stockScreenerResult$.value.found > this.stockScreenerResult$.value.result.length;
	}

	ngOnInit() {
		this.resetScreenerResults();
		this.listenOnOffsetChange();
	}

	ngOnDestroy(): void {}
	changedFormResult(stockScreener: StfmStockScreenerInput) {
		console.log('stockScreener', stockScreener);
		this.stockScreener$.next(stockScreener);
		this.cd.detectChanges();
	}

	showSummarySymbol(symbolIdentification: SymbolIdentification) {
		this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, true);
	}

	filterResult() {
		this.resetScreenerResults();
		this.offset$.next(0);
	}

	onLoadMore(): void {
		this.showLoader$.next(true);
		this.offset$.next(this.offset$.value + 25);
	}

	private listenOnOffsetChange(): void {
		this.offset$
			.pipe(
				waitFor(this.stockScreener$),
				withLatestFrom(this.stockScreener$),
				switchMap(([offset, stockScreener]) => this.graphqlQueryService.queryStockScreener(stockScreener as StfmStockScreenerInput, offset, 50)),
				takeUntil(componentDestroyed(this))
			)
			.subscribe((res) => {
				console.log(res);
				this.showLoader$.next(false);
				this.stockScreenerResult$.next({ ...res, result: [...this.stockScreenerResult$.value.result, ...res.result] });
			});
	}

	private resetScreenerResults(): void {
		this.stockScreenerResult$.next({
			found: 0,
			limit: 0,
			offset: 0,
			result: [],
		});
	}
}
