import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ChartType, GenericChartSeries} from '@shared';
import {StHolding, StTransaction, Summary} from '@core';

@Component({
    selector: 'app-details-sector-chart',
    templateUrl: './details-sector-chart.component.html',
    styleUrls: ['./details-sector-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsSectorChartComponent implements OnInit {
    @Input() summaries: Summary[];
    @Input() holdings: StHolding[] = [];
    @Input() showDataLabel = false;
    @Input() heightPx = 350;
    @Input() chartTitle: string;
    @Input() enable3D = false;
    @Input() showLegend = true;

    sectorPairs: GenericChartSeries[] = [];
    ChartType = ChartType;

    constructor() {
    }

    ngOnInit() {
        this.renderChart();
    }

    private renderChart() {
        if (!this.summaries && !!this.holdings) {
            this.summaries = this.holdings.map(s => s.summary);
        }

        // from stock details creates -> [{name: 'Technology', y: 5}, {name: 'Cruise', y: 2} ... ]
        const helper = [];
        this.sectorPairs = [];
        this.summaries.forEach(stock => {
            const sector = stock.sector.split(' ')[0];
            helper[sector] = helper[sector] + 1 || 1;
        });
        let isFirst = true;
        for (const [key, value] of Object.entries(helper)) {
            this.sectorPairs = [...this.sectorPairs, {name: key, y: value, sliced: isFirst}];
            isFirst = false;
        }
    }

}
