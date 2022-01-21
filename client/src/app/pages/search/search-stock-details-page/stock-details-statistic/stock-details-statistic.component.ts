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
	stockDetails$!: Observable<StockDetails | null>;
	isAdmin$!: Observable<boolean>;

	ChartType = ChartType;
	chartHeight_20!: number;
	chartHeight_27!: number;
	chartHeight_35!: number;

	constructor(
		private symbolStorageService: SymbolStorageService,
		private userStorageService: UserStorageService,
		private watchlistFeatureFacadeService: WatchlistFeatureFacadeService
	) {}

	ngOnInit(): void {
		this.stockDetails$ = this.symbolStorageService.getStockDetails();
		this.isAdmin$ = this.userStorageService.isAdmin();
		this.chartHeight_20 = WindowService.getWindowHeightPrctInPx(20);
		this.chartHeight_27 = WindowService.getWindowHeightPrctInPx(27);
		this.chartHeight_35 = WindowService.getWindowHeightPrctInPx(35);
	}

	reloadStockDetails() {
		this.stockDetails$ = this.symbolStorageService.reloadStockDetails();
		this.stockDetails$.pipe(first()).subscribe((res) => DialogService.showNotificationBar(`Data for symbol ${res?.id} has been reloaded`));
	}

	showPeerSummary(stockPeer: StfmCompanyQuote) {
		if (stockPeer.symbol && stockPeer.name) {
			this.watchlistFeatureFacadeService.presentSymbolLookupModal({ symbol: stockPeer.symbol, name: stockPeer.name }, true);
		}
	}
}
