import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StPortfolio, StTransaction, Summary} from '../../../../../api/customGraphql.service';
import {ChartType, GenericChartSeries} from '../../../../../shared/models/sharedModel';

@Component({
    selector: 'app-holdings-allocation-chart',
    templateUrl: './holdings-allocation-chart.component.html',
    styleUrls: ['./holdings-allocation-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoldingsAllocationChartComponent implements OnInit {
    @Input() holdings: StTransaction[];
    @Input() portfolio: StPortfolio;

    @Input() showDataLabel = false;
    @Input() heightPx = 350;

    sectorPairs: GenericChartSeries[] = [];
    ChartType = ChartType;

    constructor() {
    }

    ngOnInit() {
        this.formatHoldingsIntoChartInput();
    }


    private formatHoldingsIntoChartInput() {
        const totalPortfolio = this.portfolio.portfolioInvested + this.portfolio.portfolioCash;

        this.sectorPairs = [
            {name: 'Cash', y: 100 / totalPortfolio * this.portfolio.portfolioCash, sliced: true},
            ...this.holdings.map(h => {
                const symbolSum = h.units * h.price;
                return {name: h.symbol, y: 100 / totalPortfolio * symbolSum} as GenericChartSeries;
            })];
    }

}
