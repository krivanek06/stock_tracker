import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {GraphqlQueryService, Summary} from '@core';
import {IonSearchbar} from '@ionic/angular';
import {Observable} from 'rxjs';
import {WatchlistFeatureEntryPointsFacadeService} from '@stock-watchlist-feature';
import {SymbolIdentification} from '@shared';

@Component({
    selector: 'app-menu-header',
    templateUrl: './menu-header.component.html',
    styleUrls: ['./menu-header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MenuHeaderComponent implements OnInit {
    @ViewChild('mySearchbar') searchBar: IonSearchbar;

    searchedSummaries$: Observable<Summary[]>;

    loading = false;

    constructor(private firebaseSearchService: GraphqlQueryService,
                private watchlistFeatureEntryPointsFacadeService: WatchlistFeatureEntryPointsFacadeService) {
    }

    ngOnInit() {
    }

    searchSymbol(event: CustomEvent) {
        if (!event.detail.value) {
            this.searchedSummaries$ = undefined;
            this.loading = false;
        } else {
            this.searchedSummaries$ = this.firebaseSearchService.queryStockSummaries(event.detail.value);
            this.loading = true;
        }
    }

    async clickedSummary(summary: Summary) {
        this.searchedSummaries$ = undefined;
        this.searchBar.value = null;

        const identification: SymbolIdentification = {symbol: summary.symbol, name: summary.shortName};
        this.watchlistFeatureEntryPointsFacadeService.presentSymbolLookupModal(identification, true);
    }

}
