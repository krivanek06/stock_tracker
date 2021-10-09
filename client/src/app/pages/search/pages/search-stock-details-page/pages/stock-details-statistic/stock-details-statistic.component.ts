import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StfmCompanyQuote, StockDetails, SymbolStorageService, UserStorageService } from '@core';
import { ChartType, DialogService, WindowService } from '@shared';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-stock-details-statistic',
	templateUrl: './stock-details-statistic.component.html',
	styleUrls: ['./stock-details-statistic.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockDetailsStatisticComponent implements OnInit {
	stockDetails$: Observable<StockDetails>;
	isAdmin$: Observable<boolean>;

	ChartType = ChartType;
	chartHeight: number;
	financialsHeight: number;

	constructor(
		private symbolStorageService: SymbolStorageService,
		private userStorageService: UserStorageService,
		private watchlistFeatureFacadeService: WatchlistFeatureFacadeService
	) {}

	ngOnInit(): void {
		this.stockDetails$ = this.symbolStorageService.getStockDetails();
		this.isAdmin$ = this.userStorageService.isAdmin();
		this.chartHeight = WindowService.getWindowHeightPrctInPx(20);
		this.financialsHeight = WindowService.getWindowHeightPrctInPx(27);
	}

	reloadStockDetails() {
		this.stockDetails$ = this.symbolStorageService.reloadStockDetails();
		this.stockDetails$.pipe(first()).subscribe((res) => DialogService.presentToast(`Data for symbol ${res.id} has been reloaded`));
	}

	showPeerSummary(stockPeer: StfmCompanyQuote) {
		this.watchlistFeatureFacadeService.presentSymbolLookupModal({ symbol: stockPeer.symbol, name: stockPeer.name }, true);
	}
}
