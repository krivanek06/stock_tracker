import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GraphqlTradingStrategyService, StTradingStrategyData} from '@core';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-trading-strategy-rmc-container',
    templateUrl: './trading-strategy-rmc-container.component.html',
    styleUrls: ['./trading-strategy-rmc-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingStrategyRmcContainerComponent implements OnInit {
    @Input() symbol: string;

    riskManagementCalculator$: Observable<StTradingStrategyData>;

    constructor(private graphqlTradingStrategyService: GraphqlTradingStrategyService) {
    }

    ngOnInit() {
        this.riskManagementCalculator$ = this.graphqlTradingStrategyService.queryStTradingStrategyDataRMC(this.symbol);
    }

}
