import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StPortfolio, StPortfolioChange} from '@core';
import {TradingChangeModel} from '../../../models';
import {marketValueChange} from '@shared';
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

    weeklyPortfolio: StPortfolio;
    monthlyPortfolio: StPortfolio;
    quarterlyPortfolio: StPortfolio;
    yearlyPortfolio: StPortfolio;

    constructor() {
    }

    ngOnInit() {
        this.filterPortfolioHistoryChanges();
    }

    private filterPortfolioHistoryChanges() {
        const today: moment.Moment = moment();
        const portfolioChanges = this.stPortfolioChanges.slice().reverse(); // create copy in strict mode

        this.weeklyPortfolio = portfolioChanges.find(change => today.diff(moment(change.date), 'days') > 7)?.portfolio;
        this.monthlyPortfolio = portfolioChanges.find(change => today.diff(moment(change.date), 'months') >= 1)?.portfolio;
        this.quarterlyPortfolio = portfolioChanges.find(change => today.diff(moment(change.date), 'months') >= 4)?.portfolio;
        this.yearlyPortfolio = portfolioChanges.find(change => today.diff(moment(change.date), 'years') >= 1)?.portfolio;
    }

}
