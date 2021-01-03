import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ChartType} from '../../../../shared/models/sharedModel';
import {Summary} from "../../../../api/customGraphql.service";

@Component({
    selector: 'app-summary-sector-chart',
    templateUrl: './summary-sector-chart.component.html',
    styleUrls: ['./summary-sector-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SummarySectorChartComponent implements OnInit {
    @Input() summaries: Summary[];

    sectorPairs = [];
    ChartType = ChartType;

    constructor() {
    }

    ngOnInit() {

        // from stock details creates -> [{name: 'Technology', y: 5}, {name: 'Cruise', y: 2} ... ]
        const helper = [];
        this.summaries.forEach(stock => {
            helper[stock.sector] = helper[stock.sector] + 1 || 1;
        });
        for (const [key, value] of Object.entries(helper)) {
            this.sectorPairs = [...this.sectorPairs, {name: key, y: value}];
        }

    }

}
