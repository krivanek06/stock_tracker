import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {StPortfolio, StTransaction, Summary} from '../../../../../api/customGraphql.service';
import {ChartType, GenericChartSeries} from '../../../../../shared/models/sharedModel';

@Component({
    selector: 'app-holdings-allocation-chart',
    templateUrl: './holdings-allocation-chart.component.html',
    styleUrls: ['./holdings-allocation-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoldingsAllocationChartComponent implements OnInit, OnChanges {
    @Input() holdings: StTransaction[];
    @Input() portfolioInvested: number;
    @Input() portfolioCash: number;

    @Input() showDataLabel = false;
    @Input() heightPx = 350;
    @Input() enable3D = false;
    @Input() showLegend = true;

    sectorPairs: GenericChartSeries[] = [];
    ChartType = ChartType;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        if (changes.portfolioInvested) {
            this.formatHoldingsIntoChartInput();
        }
    }

    ngOnInit() {
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
