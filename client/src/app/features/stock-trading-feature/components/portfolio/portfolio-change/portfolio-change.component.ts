import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StPortfolio, StPortfolioChange, StTransaction} from '@core';
import {TradingChangeModel} from '../../../models';
import {marketValueChange} from '@shared';

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
    @Input() stPortfolioChanges: StPortfolioChange[];
    @Input() stTransactions: StTransaction[];
    @Input() daily: TradingChangeModel;

    weeklyChange: TradingChangeModel;
    monthlyChange: TradingChangeModel;
    quarterly: TradingChangeModel;
    yearlyChange: TradingChangeModel;

    constructor() {
    }


    ngOnInit() {
        this.filterPortfolioHistoryChanges();
    }

    private filterPortfolioHistoryChanges() {
        if (!this.stPortfolioChanges) {
            return;
        }

        const numberOfData = this.stPortfolioChanges.length; // [oldest....newest]
        /*if (numberOfData >= 0) {
            this.weeklyChange = {
                change: this.stPortfolioHistory[numberOfData - 1].portfolioWeeklyChange,
                growth: this.stPortfolioHistory[numberOfData - 1].portfolioWeeklyGrowth
            };
        }
        if (numberOfData >= 4) {
            this.monthlyChange = {
                change: this.stPortfolioHistory[numberOfData - 4].portfolioWeeklyChange,
                growth: this.stPortfolioHistory[numberOfData - 4].portfolioWeeklyGrowth
            };
        }
        if (numberOfData >= 12) {
            this.quarterly = {
                change: this.stPortfolioHistory[numberOfData - 12].portfolioWeeklyChange,
                growth: this.stPortfolioHistory[numberOfData - 12].portfolioWeeklyGrowth
            };
        }
        if (numberOfData >= 52) {
            this.yearlyChange = {
                change: this.stPortfolioHistory[numberOfData - 52].portfolioWeeklyChange,
                growth: this.stPortfolioHistory[numberOfData - 52].portfolioWeeklyGrowth
            };
        }*/

    }

}
