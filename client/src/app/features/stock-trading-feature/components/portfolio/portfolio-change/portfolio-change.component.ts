import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StPortfolio, StPortfolioSnapshot} from '@core';
import {PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM, TradingChangeModel} from '../../../models';
import {marketValueChange, zipArrays} from '@shared';
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
    @Input() stPortfolioSnapshots: StPortfolioSnapshot[] = [];
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

        // find needed portfolio
        const weeklyPortfolio = this.stPortfolioSnapshots.find(change => today.diff(moment(change.date), 'days') >= 7);
        const monthlyPortfolio = this.stPortfolioSnapshots.find(change => today.diff(moment(change.date), 'months') >= 1);
        const quarterlyPortfolio = this.stPortfolioSnapshots.find(change => today.diff(moment(change.date), 'months') >= 4);
        const yearlyPortfolio = this.stPortfolioSnapshots.find(change => today.diff(moment(change.date), 'years') >= 1);
        const fromBeginning = this.stPortfolioSnapshots[0];

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
