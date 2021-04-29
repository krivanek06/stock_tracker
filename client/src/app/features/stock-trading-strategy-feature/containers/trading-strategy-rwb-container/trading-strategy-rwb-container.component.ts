import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {GraphqlTradingStrategyService, StTradingStrategyData} from '@core';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-trading-strategy-rwb-container',
    templateUrl: './trading-strategy-rwb-container.component.html',
    styleUrls: ['./trading-strategy-rwb-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TradingStrategyRwbContainerComponent implements OnInit {
    @Input() symbol: string;
    @Input() heightPx = 400;

    redWhiteBlue$: Observable<StTradingStrategyData>;

    constructor(private graphqlTradingStrategyService: GraphqlTradingStrategyService) {
    }

    ngOnInit() {
      this.redWhiteBlue$ = this.graphqlTradingStrategyService.queryStTradingStrategyDataRWB(this.symbol);
    }

}
