import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {SEARCH_PAGE_STOCK_DETAILS_ENUM, STOCK_SEARCH_DETAILS_PAGES} from '../../../models/pages.model';
import {componentDestroyed, SymbolStorageService} from '@core';

@Component({
    selector: 'app-search-stock-details',
    templateUrl: './search-stock-details-page.component.html',
    styleUrls: ['./search-stock-details-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchStockDetailsPage implements OnInit, OnDestroy {
    segmentValue = SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS;
    STOCK_SEARCH_DETAILS_PAGES = STOCK_SEARCH_DETAILS_PAGES;
    showSpinner = true;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private stockDetailsService: SymbolStorageService) {

    }

    ngOnInit() {
        this.stockDetailsService.setActiveSymbol(this.route.snapshot.paramMap.get('symbol') as string);
        this.stockDetailsService.getStockDetails().pipe(takeUntil(componentDestroyed(this))).subscribe((res) => {
            console.log(res);
            this.showSpinner = false;
        });
    }

    ngOnDestroy() {

    }

    segmentChanged(data: CustomEvent) {
        this.segmentValue = data.detail.value;
        this.router.navigate([`menu/search/stock/details/${this.stockDetailsService.activeSymbol}/${this.segmentValue}`]);
    }

}
