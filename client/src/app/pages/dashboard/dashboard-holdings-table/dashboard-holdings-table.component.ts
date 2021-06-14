import {Component, Input, OnInit} from '@angular/core';
import {SymbolIdentification} from '@shared';
import {StTransaction} from '@core';
import {WatchlistFeatureFacadeService} from '@stock-watchlist-feature';

@Component({
    selector: 'app-dashboard-holdings-table',
    templateUrl: './dashboard-holdings-table.component.html',
    styleUrls: ['./dashboard-holdings-table.component.scss'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHoldingsTableComponent implements OnInit {

    @Input() stTransactions: StTransaction[];
    @Input() totalPortfolio: number;

    constructor(private watchlistFeatureFacadeService: WatchlistFeatureFacadeService) {
    }

    ngOnInit() {
    }

    async showSummary(symbolIdentification: SymbolIdentification) {
        this.watchlistFeatureFacadeService.presentSymbolLookupModal(symbolIdentification, false);
    }

}
