import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Summary} from '@core';
import {WatchlistFeatureFacadeService} from '@stock-watchlist-feature';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search-stock-summary',
    templateUrl: './search-stock-summary.component.html',
    styleUrls: ['./search-stock-summary.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchStockSummaryComponent implements OnInit {
    selectedSummary: Summary;

    constructor(private watchlistService: WatchlistFeatureFacadeService,
                private router: Router) {
    }

    ngOnInit() {
    }

    showSymbolInformation(summary: Summary) {
        this.selectedSummary = summary;
    }

    addSymbolToWatchlist() {
        this.watchlistService.addSymbolToWatchlist(this.selectedSummary.symbol);
    }

    redirectToDetails() {
        this.router.navigate([`/menu/search/stock/details/${this.selectedSummary.symbol}`]);
    }
}
