import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { componentDestroyed, SymbolStorageService } from '@core';
import { takeUntil } from 'rxjs/operators';
import { SEARCH_PAGE_ENUM, STOCK_SEARCH_DETAILS_PAGES } from '../../models/pages.model';

@Component({
	selector: 'app-search-stock-details',
	templateUrl: './search-stock-details-page.component.html',
	styleUrls: ['./search-stock-details-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchStockDetailsPage implements OnInit, OnDestroy {
	STOCK_SEARCH_DETAILS_PAGES = STOCK_SEARCH_DETAILS_PAGES;
	showSpinner = true;

	constructor(private stockDetailsService: SymbolStorageService, private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		const symbol = this.route.snapshot.paramMap.get('symbol');
		this.stockDetailsService.setActiveSymbol(symbol);
		this.stockDetailsService
			.getStockDetails()
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe((res) => {
				console.log('loaded stock details', res);
				this.showSpinner = false;
				console.log('show spinner', this.showSpinner);
			});
	}

	ngOnDestroy() {}

	segmentChanged(data: CustomEvent) {
		this.router.navigateByUrl(`menu/search/${SEARCH_PAGE_ENUM.STOCK_DETAILS}/${this.stockDetailsService.activeSymbol}/${data.detail.value}`);
	}
}
