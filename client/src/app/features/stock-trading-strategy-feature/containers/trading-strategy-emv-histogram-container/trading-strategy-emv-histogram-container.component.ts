import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GraphqlTradingStrategyService, StTradingStrategyData} from '@core';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-trading-strategy-emv-histogram-container',
    templateUrl: './trading-strategy-emv-histogram-container.component.html',
    styleUrls: ['./trading-strategy-emv-histogram-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingStrategyEmvHistogramContainerComponent implements OnInit {
    @Input() symbol: string;
    @Input() heightPx = 400;

    extendedMarketVerification$: Observable<StTradingStrategyData>;

    constructor(private graphqlTradingStrategyService: GraphqlTradingStrategyService) {
    }

    ngOnInit() {
        this.extendedMarketVerification$ = this.graphqlTradingStrategyService.queryStTradingStrategyDataEMV(this.symbol);
    }

}
