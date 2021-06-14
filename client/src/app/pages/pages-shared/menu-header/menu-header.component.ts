import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {GraphqlQueryService, StUserPublicData, Summary, UserStorageService} from '@core';
import {IonSearchbar} from '@ionic/angular';
import {Observable} from 'rxjs';
import {WatchlistFeatureFacadeService} from '@stock-watchlist-feature';
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
    showNotifications = false;

    user$: Observable<StUserPublicData>;
    isAuthenticating$: Observable<boolean>;

    constructor(private firebaseSearchService: GraphqlQueryService,
                private userStorageService: UserStorageService,
                private watchlistFeatureFacadeService: WatchlistFeatureFacadeService) {
    }

    ngOnInit() {
        this.user$ = this.userStorageService.getUser();
        this.isAuthenticating$ = this.userStorageService.getIsAuthenticating();
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

    toggleNotifications() {
        this.showNotifications = !this.showNotifications;
    }

    async clickedSummary(summary: Summary) {
        this.searchedSummaries$ = undefined;
        this.searchBar.value = null;

        const identification: SymbolIdentification = {symbol: summary.symbol, name: summary.shortName};
        this.watchlistFeatureFacadeService.presentSymbolLookupModal(identification, true);
    }

}
