import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { componentDestroyed, GraphqlQueryService, StfmStockScreenerInput, StfmStockScreenerResultWrapper, waitFor } from '@core';
import { IonInfiniteScroll } from '@ionic/angular';
import { SymbolIdentification } from '@shared';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';
import { BehaviorSubject, Subject, switchMap, tap, withLatestFrom } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-search-stock-page',
	templateUrl: './search-stock-page.component.html',
	styleUrls: ['./search-stock-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchStockPageComponent implements OnInit, OnDestroy {
	stockScreener$: Subject<StfmStockScreenerInput> = new Subject<StfmStockScreenerInput>();

	limit = 50;
	stockScreenerResult$: BehaviorSubject<StfmStockScreenerResultWrapper> = new BehaviorSubject<StfmStockScreenerResultWrapper>(
		{} as StfmStockScreenerResultWrapper
	);
	@ViewChild(IonInfiniteScroll) infiniteScroll!: IonInfiniteScroll;
	private offset$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

	constructor(
		private graphqlQueryService: GraphqlQueryService,
		private watchlistFeatureFacadeService: WatchlistFeatureFacadeService,
		private cd: ChangeDetectorRef
	) {}

	ngOnInit() {
		this.resetScreenerResults();
		//this.loadScreenerResultsFromMarketDailyOverview();
		//this.listenOnOffsetChange();
		this.toggleInfiniteScroll();
	}

	ngOnDestroy(): void {}
	changedFormResult(stockScreener: StfmStockScreenerInput) {
		//this.stockScreener = stockScreener;
		console.log('stockScreener', stockScreener);
		this.stockScreener$.next(stockScreener);
	}

	showSummarySymbol(symbolIdentification: SymbolIdentification) {
		this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, true);
	}

	filterResult() {
		//this.offset = 0;
		this.resetScreenerResults();
		this.toggleInfiniteScroll();
		this.offset$.next(0);

		//this.loadData(null, 0);
	}

	changeOffset(event: any, offset: number): void {
		//this.offset = this.offset + offset;
		this.offset$.next(this.offset$.value + offset);
		console.log('load', this.offset$, event);
		// this.graphqlQueryService.queryStockScreener(this.stockScreener as StfmStockScreenerInput, this.offset, this.limit).subscribe((res) => {
		// 	console.log(res);
		// 	this.stockScreenerResult = this.stockScreenerResult
		// 		? { ...this.stockScreenerResult, result: [...(this.stockScreenerResult.result || []), ...(res.result || [])] }
		// 		: res;
		// 	this.cd.detectChanges();

		// 	if (event) {
		// 		event.target.complete();
		// 	}

		// 	if (this.offset + this.limit > (this.stockScreenerResult.found || 0)) {
		// 		this.toggleInfiniteScroll();
		// 	}
		// });
	}

	toggleInfiniteScroll(): void {
		this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
	}

	private listenOnOffsetChange(): void {
		this.offset$
			.pipe(
				tap((offset) => {
					console.log('offset change', offset);
				}),
				waitFor(this.stockScreener$),
				withLatestFrom(this.stockScreener$),
				tap((offset) => {
					console.log('offset  2222', offset);
				}),
				switchMap(([offset, stockScreener]) =>
					this.graphqlQueryService.queryStockScreener(stockScreener as StfmStockScreenerInput, offset, this.limit)
				),
				takeUntil(componentDestroyed(this))
			)
			.subscribe((res) => {
				console.log(res);
				this.stockScreenerResult$.next({ ...this.stockScreenerResult$.value, ...res });
				if (this.offset$.value + this.limit > res.found) {
					this.toggleInfiniteScroll();
				}
			});
		// this.offset$
		// 	.pipe(
		// 		tap((offset) => {
		// 			console.log('offset change', offset);
		// 		}),
		// 		waitFor(this.stockScreener$),
		// 		tap((offset) => {
		// 			console.log('offset change 2222', offset);
		// 		}),
		// 		switchMap((offset) => this.graphqlQueryService.queryStockScreener(this.stockScreener as StfmStockScreenerInput, offset, this.limit)),
		// 		takeUntil(componentDestroyed(this))
		// 	)
		// 	.subscribe((res) => {
		// 		this.stockScreenerResult$.next({ ...this.stockScreenerResult$.value, ...res });
		// 		if (this.offset$.value + this.limit > res.found) {
		// 			this.toggleInfiniteScroll();
		// 		}
		// 	});
	}

	private resetScreenerResults(): void {
		this.stockScreenerResult$.next({
			found: 0,
			limit: 0,
			offset: 0,
			result: [],
		});
	}

	// private loadScreenerResultsFromMarketDailyOverview(): void {
	// 	this.graphqlQueryService
	// 		.queryMarketDailyOverview()
	// 		.pipe(
	// 			map((res) => {
	// 				return {
	// 					result: res.stockScreener,
	// 					limit: this.limit,
	// 					offset: 0,
	// 					__typename: 'STFMStockScreenerResultWrapper',
	// 				} as StfmStockScreenerResultWrapper;
	// 			})
	// 		)
	// 		.subscribe((res) => {
	// 			this.stockScreenerResult$.next({ ...this.stockScreenerResult$.value, ...res });
	// 			//this.stockScreenerResult = res;
	// 			this.toggleInfiniteScroll();
	// 			//this.cd.detectChanges();
	// 		});
	// }
}
