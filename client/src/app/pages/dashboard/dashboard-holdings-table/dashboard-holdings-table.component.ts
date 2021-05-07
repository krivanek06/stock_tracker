import {Component, Input, OnInit} from '@angular/core';
import {SymbolIdentification} from '@shared';
import {StTransaction} from '@core';
import {WatchlistFeatureEntryPointsFacadeService} from '@stock-watchlist-feature';

@Component({
    selector: 'app-dashboard-holdings-table',
    templateUrl: './dashboard-holdings-table.component.html',
    styleUrls: ['./dashboard-holdings-table.component.scss'],
    //changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardHoldingsTableComponent implements OnInit {

    @Input() stTransactions: StTransaction[];
    @Input() totalPortfolio: number;

    constructor(private watchlistFeatureEntryPointsFacadeService: WatchlistFeatureEntryPointsFacadeService) {
    }

    ngOnInit() {
    }

    async showSummary(symbolIdentification: SymbolIdentification) {
        this.watchlistFeatureEntryPointsFacadeService.presentSymbolLookupModal(symbolIdentification, false);
    }

}
