import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StPortfolio, StPortfolioChange} from '@core';
import {PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM, TradingChangeModel} from '../../../models';
import {lastElement, marketValueChange, zipArrays} from '@shared';
import * as moment from 'moment';


@Component({
    selector: 'app-portfolio-change',
    templateUrl: './portfolio-change.component.html',
    styleUrls: ['./portfolio-change.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class PortfolioChangeComponent implements OnInit {
    @Input() stPortfolioChanges: StPortfolioChange[] = [];
    @Input() balance: number;
    @Input() daily: TradingChangeModel;

    tradingChangeWrapper: PortfolioHistoricalWrapper[] = [];

    constructor() {
    }

    ngOnInit() {
        this.filterPortfolioHistoryChanges();
    }

    private filterPortfolioHistoryChanges() {
        const today: moment.Moment = moment();
        const portfolioChanges = this.stPortfolioChanges.slice().reverse(); // create copy in strict mode

        // find needed portfolio
        const weeklyPortfolio = portfolioChanges.find(change => today.diff(moment(change.date), 'days') > 7)?.portfolio;
        const monthlyPortfolio = portfolioChanges.find(change => today.diff(moment(change.date), 'months') >= 1)?.portfolio;
        const quarterlyPortfolio = portfolioChanges.find(change => today.diff(moment(change.date), 'months') >= 4)?.portfolio;
        const yearlyPortfolio = portfolioChanges.find(change => today.diff(moment(change.date), 'years') >= 1)?.portfolio;
        const fromBeginning = lastElement(portfolioChanges)?.portfolio;

        const portfolios = [weeklyPortfolio, monthlyPortfolio, fromBeginning];

        // create time interval array
        const timeIntervals = [TIME_INTERVAL_ENUM.WEEKLY, TIME_INTERVAL_ENUM.MONTHLY, TIME_INTERVAL_ENUM.FROM_BEGINNING];

        // zip them
        this.tradingChangeWrapper = zipArrays(timeIntervals as any[], portfolios)
            .map((intervalPortfolio: [TIME_INTERVAL_ENUM, StPortfolio]) => {
                return {
                    timeIntervalName: intervalPortfolio[0],
                    historicalBalance: intervalPortfolio[1]?.portfolioInvested + intervalPortfolio[1]?.portfolioCash
                };
            }).filter(wrapper => !!wrapper.historicalBalance);
    }

}
