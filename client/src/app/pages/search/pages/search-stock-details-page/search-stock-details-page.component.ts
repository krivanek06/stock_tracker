import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { componentDestroyed, SymbolStorageService } from '@core';
import { takeUntil } from 'rxjs/operators';
import { SEARCH_PAGE_STOCK_DETAILS_ENUM, STOCK_SEARCH_DETAILS_PAGES } from '../../models/pages.model';

@Component({
	selector: 'app-search-stock-details',
	templateUrl: './search-stock-details-page.component.html',
	styleUrls: ['./search-stock-details-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchStockDetailsPage implements OnInit, OnDestroy {
	segmentValue = SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS;
	STOCK_SEARCH_DETAILS_PAGES = STOCK_SEARCH_DETAILS_PAGES;
	SEARCH_PAGE_STOCK_DETAILS_ENUM = SEARCH_PAGE_STOCK_DETAILS_ENUM;
	showSpinner = true;

	constructor(private route: ActivatedRoute, private stockDetailsService: SymbolStorageService) {}

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
		this.segmentValue = data.detail.value;
	}
}
