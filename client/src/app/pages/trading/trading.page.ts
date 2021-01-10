import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {StStockDailyInformations, StStockDailyInformationsData, StUserPublicData, Summary} from '../../api/customGraphql.service';
import {SymbolIdentification} from '../../shared/models/sharedModel';
import {StockDetailsService} from '../../features/stock-details-feature/services/stock-details.service';
import {ComponentBase} from '../../shared/utils/component-base/component.base';
import {map, takeUntil} from 'rxjs/operators';
import {TradingService} from '../../features/trading-feature/services/trading.service';
import {Observable} from 'rxjs';
import {HoldingsTableEnum} from '../../features/trading-feature/components/holdings/holdings-table.enum';

@Component({
    selector: 'app-trading',
    templateUrl: './trading.page.html',
    styleUrls: ['./trading.page.scss']
})
export class TradingPage extends ComponentBase implements OnInit {
    suggestions$: Observable<StStockDailyInformationsData[]>;
    user: StUserPublicData;
    selectedSummary: Summary;
    holdingsSummaries: Summary[] = [];

    HoldingsTableEnum = HoldingsTableEnum;


    constructor(private authFeatureService: AuthFeatureService,
                private stockDetailsService: StockDetailsService,
                private tradingService: TradingService) {
        super();
    }

    ngOnInit() {
        this.initComponent();
        this.suggestions$ = this.stockDetailsService.getStockDailyInformation().pipe(map(x => x.dailySuggestions));
    }

    changeSymbol(symbolIdentification: SymbolIdentification) {
        this.stockDetailsService.getStockSummary(symbolIdentification.symbol).pipe(takeUntil(this.destroy$)).subscribe(res => {
            this.selectedSummary = res;
        });
    }

    changeSummary(summary: Summary) {
        this.selectedSummary = summary;
        // TODO smooth scroll to top
    }

    tradeSymbol() {
        this.tradingService.performTransaction(this.selectedSummary);
    }

    private initComponent() {
        this.authFeatureService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => {
            this.user = user;
            this.holdingsSummaries = user?.holdings.map(x => x.summary);
        });
    }


}
