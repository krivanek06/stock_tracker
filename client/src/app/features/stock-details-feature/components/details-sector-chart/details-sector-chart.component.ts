import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {ChartType, GenericChartSeries} from '@shared';
import {StHolding, Summary} from '@core';

@Component({
    selector: 'app-details-sector-chart',
    templateUrl: './details-sector-chart.component.html',
    styleUrls: ['./details-sector-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsSectorChartComponent implements OnInit, OnChanges {
    @Input() summaries: Summary[];
    @Input() holdings: StHolding[] = [];
    @Input() showDataLabel = false;
    @Input() heightPx = 350;
    @Input() showLegend = true;
    @Input() showTitle = true;
    @Input() addMinWidthStyle = false;

    sectorPairs: GenericChartSeries[] = [];
    ChartType = ChartType;

    constructor() {
    }

    ngOnChanges(changes: SimpleChanges): void {
        this.renderChart();
    }

    ngOnInit() {

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
