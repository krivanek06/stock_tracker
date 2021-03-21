import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Summary} from '../../../../../core/api';
import {WatchlistFeatureService} from '@stock-watchlist-feature';
import {Router} from '@angular/router';
import {SEARCH_PAGE_ENUM, SEARCH_PAGE_STOCK_ENUM} from '../../../models/pages.model';

@Component({
    selector: 'app-search-stock-summary',
    templateUrl: './search-stock-summary.component.html',
    styleUrls: ['./search-stock-summary.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchStockSummaryComponent implements OnInit {
    selectedSummary: Summary;

    constructor(private watchlistService: WatchlistFeatureService,
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
        this.router.navigate([`/menu/search/${SEARCH_PAGE_ENUM.STOCK}/${SEARCH_PAGE_STOCK_ENUM.DETAILS}/${this.selectedSummary.symbol}`]);
    }
}
