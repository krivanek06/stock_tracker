import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GraphqlTradingStrategyService, StTradingStrategyData} from '@core';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-trading-strategy-emv-container',
    templateUrl: './trading-strategy-emv-container.component.html',
    styleUrls: ['./trading-strategy-emv-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingStrategyEmvContainerComponent implements OnInit {
    @Input() symbol: string;
    @Input() heightPx = 400;

    extendedMarketVerification$: Observable<StTradingStrategyData>;

    constructor(private graphqlTradingStrategyService: GraphqlTradingStrategyService) {
    }

    ngOnInit() {
        this.extendedMarketVerification$ = this.graphqlTradingStrategyService.queryStTradingStrategyDataEMV(this.symbol);
    }

}
