import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {StfmCompanyQuote, StockDetails, SymbolStorageService, UserStorageService} from '@core';
import {ChartType, DialogService} from '@shared';
import {Observable} from 'rxjs';
import {first} from 'rxjs/operators';
import {WatchlistFeatureFacadeService} from '@stock-watchlist-feature';

@Component({
    selector: 'app-stock-details-statistic',
    templateUrl: './stock-details-statistic.component.html',
    styleUrls: ['./stock-details-statistic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsStatisticComponent implements OnInit {
    stockDetails$: Observable<StockDetails>;
    isAdmin$: Observable<boolean>;

    ChartType = ChartType;

    constructor(private symbolStorageService: SymbolStorageService,
                private userStorageService: UserStorageService,
                private watchlistFeatureFacadeService: WatchlistFeatureFacadeService) {
    }


    ngOnInit(): void {
        this.stockDetails$ = this.symbolStorageService.getStockDetails();
        this.isAdmin$ = this.userStorageService.isAdmin();
    }

    reloadStockDetails() {
        this.stockDetails$ = this.symbolStorageService.reloadStockDetails();
        this.stockDetails$.pipe(first()).subscribe(res =>
            DialogService.presentToast(`Data for symbol ${res.id} has been reloaded`));
    }

    showPeerSummary(stockPeer: StfmCompanyQuote) {
        this.watchlistFeatureFacadeService.presentSymbolLookupModal({symbol: stockPeer.symbol, name: stockPeer.name}, true);
    }
}
