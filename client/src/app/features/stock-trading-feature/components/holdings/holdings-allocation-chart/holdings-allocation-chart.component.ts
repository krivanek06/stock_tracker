import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StHolding, StTransaction} from '@core';
import {ChartType, GenericChartSeries} from '@shared';

@Component({
    selector: 'app-holdings-allocation-chart',
    templateUrl: './holdings-allocation-chart.component.html',
    styleUrls: ['./holdings-allocation-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoldingsAllocationChartComponent implements OnInit {
    @Input() holdings: StHolding[];
    @Input() portfolioCash: number;
    @Input() portfolioInvested: number;

    @Input() showDataLabel = false;
    @Input() heightPx = 350;
    @Input() enable3D = false;
    @Input() showLegend = true;

    sectorPairs: GenericChartSeries[] = [];
    ChartType = ChartType;

    constructor() {
    }


    ngOnInit() {
        this.formatHoldingsIntoChartInput();
    }


    private formatHoldingsIntoChartInput() {
        const totalPortfolio = this.portfolioInvested + this.portfolioCash;

        this.sectorPairs = [
            {name: 'Cash', y: 100 / totalPortfolio * this.portfolioCash, sliced: true},
            ...this.holdings.map(h => {
                const symbolSum = h.units * h.summary.marketPrice;
                return {name: h.symbol, y: 100 / totalPortfolio * symbolSum} as GenericChartSeries;
            })];
    }

}
