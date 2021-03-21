import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartType, GenericChartSeries} from '@shared';
import {StTransaction, Summary} from '@core';

@Component({
    selector: 'app-summary-sector-chart',
    templateUrl: './summary-sector-chart.component.html',
    styleUrls: ['./summary-sector-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummarySectorChartComponent implements OnInit, OnChanges {
    @Input() summaries: Summary[];
    @Input() stTransactions: StTransaction[] = [];
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

    }

    ngOnChanges(changes: SimpleChanges): void {
        if (!!changes && (!!changes.summaries || changes.stTransactions)) {
            this.renderChart();
        }
    }

    private renderChart() {
        if (!this.summaries && !!this.stTransactions) {
            this.summaries = this.stTransactions.map(s => s.summary);
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
