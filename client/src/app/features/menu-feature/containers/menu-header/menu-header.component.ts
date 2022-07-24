import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
	@Output() showMenuEmitter: EventEmitter<void> = new EventEmitter<void>();
	@Input() showMenuButton!: boolean | null;
	@ViewChild('mySearchbar') searchBar!: IonSearchbar;

	searchCompanyQuotes$?: Observable<StfmCompanyQuote[]>;

	loading = false;

	user$!: Observable<StUserPublicData>;
	isAuthenticating$!: Observable<boolean>;

	constructor(
		private firebaseSearchService: GraphqlQueryService,
		private userStorageService: UserStorageService,
		private watchlistFeatureFacadeService: WatchlistFeatureFacadeService
	) {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUser();
		this.isAuthenticating$ = this.userStorageService.getIsAuthenticating();
	}

	searchSymbol(event: any) {
		if (!event.detail.value) {
			this.searchCompanyQuotes$ = undefined;
			this.loading = false;
		} else {
			this.searchCompanyQuotes$ = this.firebaseSearchService.queryStockQuotesByPrefix(event.detail.value);
			this.loading = true;
		}
	}
	showMenu(): void {
		this.showMenuEmitter.emit();
	}

	async clickedSummary(companyQuote: StfmCompanyQuote) {
		console.log(companyQuote);
		const { symbol, name } = companyQuote;
		const isEtf = companyQuote.exchange === 'ETF';
		this.searchCompanyQuotes$ = undefined;
		this.searchBar.value = null;

		this.watchlistFeatureFacadeService.presentSymbolLookupModal({ symbol, name, isEtf }, true);
	}
}
