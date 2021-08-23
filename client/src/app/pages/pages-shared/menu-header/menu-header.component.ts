import { ChangeDetectionStrategy, Component, OnInit, ViewChild } from '@angular/core';
import { GraphqlQueryService, StfmCompanyQuote, StUserPublicData, UserStorageService } from '@core';
import { IonSearchbar } from '@ionic/angular';
import { WatchlistFeatureFacadeService } from '@stock-watchlist-feature';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-menu-header',
	templateUrl: './menu-header.component.html',
	styleUrls: ['./menu-header.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MenuHeaderComponent implements OnInit {
	@ViewChild('mySearchbar') searchBar: IonSearchbar;

	searchCompanyQuotes$: Observable<StfmCompanyQuote[]>;

	loading = false;
	showNotifications = false;

	user$: Observable<StUserPublicData>;
	isAuthenticating$: Observable<boolean>;

	constructor(
		private firebaseSearchService: GraphqlQueryService,
		private userStorageService: UserStorageService,
		private watchlistFeatureFacadeService: WatchlistFeatureFacadeService
	) {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUser();
		this.isAuthenticating$ = this.userStorageService.getIsAuthenticating();
	}

	searchSymbol(event: CustomEvent) {
		if (!event.detail.value) {
			this.searchCompanyQuotes$ = undefined;
			this.loading = false;
		} else {
			this.searchCompanyQuotes$ = this.firebaseSearchService.queryStockQuotesByPrefix(event.detail.value);
			this.loading = true;
		}
	}

	toggleNotifications() {
		this.showNotifications = !this.showNotifications;
	}

	async clickedSummary(symbol: string, name: string) {
		this.searchCompanyQuotes$ = undefined;
		this.searchBar.value = null;

		this.watchlistFeatureFacadeService.presentSymbolLookupModal({ symbol, name }, true);
	}
}
