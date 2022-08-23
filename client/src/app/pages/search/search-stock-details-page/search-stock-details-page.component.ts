import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { componentDestroyed, SymbolStorageService } from '@core';
import { map, switchMap, takeUntil, tap } from 'rxjs/operators';
import { SEARCH_PAGE_ENUM, STOCK_SEARCH_DETAILS_PAGES } from '../models/pages.model';

@Component({
	selector: 'app-search-stock-details',
	templateUrl: './search-stock-details-page.component.html',
	styleUrls: ['./search-stock-details-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchStockDetailsPage implements OnInit, OnDestroy {
	STOCK_SEARCH_DETAILS_PAGES = STOCK_SEARCH_DETAILS_PAGES;

	constructor(private stockDetailsService: SymbolStorageService, private route: ActivatedRoute, private router: Router) {}

	ngOnInit() {
		this.reactOnRouterChange();
	}

	ngOnDestroy() {}

	segmentChanged(data: any) {
		this.router.navigateByUrl(`menu/search/${SEARCH_PAGE_ENUM.STOCK_DETAILS}/${this.stockDetailsService.activeSymbol}/${data.detail.value}`);
	}

	private reactOnRouterChange(): void {
		this.route.paramMap
			.pipe(
				map((paramMap) => paramMap.get('symbol')),
				tap((symbol) => this.stockDetailsService.setActiveSymbol(symbol)),
				switchMap(() => this.stockDetailsService.getStockDetails()),
				takeUntil(componentDestroyed(this))
			)
			.subscribe();
	}
}
