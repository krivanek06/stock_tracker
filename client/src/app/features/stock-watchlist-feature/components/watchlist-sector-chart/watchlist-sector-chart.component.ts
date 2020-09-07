import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Maybe, StockDetails, StockMainDetailsFragment} from '../../../../api/customGraphql.service';
import {ChartType} from '../../../../shared/models/sharedModel';

@Component({
    selector: 'app-watchlist-sector-chart',
    templateUrl: './watchlist-sector-chart.component.html',
    styleUrls: ['./watchlist-sector-chart.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class WatchlistSectorChartComponent implements OnInit {
    @Input() stockDetails: Array<Maybe<{ __typename?: 'StockDetails' } & StockMainDetailsFragment>>;

    sectorPairs = [];
    ChartType = ChartType;

    constructor() {
    }

    ngOnInit() {

        // from stock details creates -> [{name: 'Technology', y: 5}, {name: 'Cruise', y: 2} ... ]
        const helper = [];
        this.stockDetails.forEach(stock => {
            helper[stock.basicInfo.sector] = helper[stock.basicInfo.sector] + 1 || 1;
        });
        for (const [key, value] of Object.entries(helper)) {
            this.sectorPairs = [...this.sectorPairs, {name: key, y: value}];
        }

    }

}
