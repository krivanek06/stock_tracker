import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StPortfolio, StPortfolioWeeklyChange, StTransaction} from '../../../../../api/customGraphql.service';
import {TradingChangeModel} from '../../../models/trading.model';

@Component({
    selector: 'app-portfolio-change',
    templateUrl: './portfolio-change.component.html',
    styleUrls: ['./portfolio-change.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioChangeComponent implements OnInit {
    @Input() stPortfolioHistory: StPortfolio[];
    @Input() holdings: StTransaction[];

    daily: TradingChangeModel;
    weeklyChange: TradingChangeModel;
    monthlyChange: TradingChangeModel;
    quarterly: TradingChangeModel;
    yearlyChange: TradingChangeModel;

    constructor() {
    }

    ngOnInit() {
        this.filterPortfolioHistoryChanges();
        this.filterHoldingDailyChange();
    }

    private filterHoldingDailyChange() {
        if (!this.holdings) {
            return;
        }

        const tmp = this.holdings.map(h => [h.units * h.price, h.units * h.summary.marketPrice])
            .reduce((acc, val) => [acc[0] + val[0], acc[1] + val[1]]);

        this.daily = {
            growth: tmp[0] - tmp[1],
            change: (tmp[0] - tmp[1]) / Math.abs(tmp[1]) * 100
        };

    }

    private filterPortfolioHistoryChanges() {
        if (!this.stPortfolioHistory) {
            return;
        }

        const numberOfData = this.stPortfolioHistory.length; // [oldest....newest]
        if (numberOfData >= 0) {
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
        }

    }

}
