import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ChartType} from '../../../../shared/models/sharedModel';
import {Summary} from "../../../../api/customGraphql.service";

@Component({
    selector: 'app-watchlist-sector-chart',
    templateUrl: './watchlist-sector-chart.component.html',
    styleUrls: ['./watchlist-sector-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistSectorChartComponent implements OnInit {
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
