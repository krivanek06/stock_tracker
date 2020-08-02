import {Component, Input, OnInit} from '@angular/core';
import {Maybe, StockDetails, StockMainDetailsFragment} from '../../../../core/services/private/watchlistGraphql.service';

@Component({
    selector: 'app-watchlist-sector-chart',
    templateUrl: './watchlist-sector-chart.component.html',
    styleUrls: ['./watchlist-sector-chart.component.scss'],
})
export class WatchlistSectorChartComponent implements OnInit {
    @Input() stockDetails: Array<Maybe<{ __typename?: 'StockDetails' } & StockMainDetailsFragment>>;

    sectorPairs = [];

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