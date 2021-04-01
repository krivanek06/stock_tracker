import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {SEARCH_PAGE_ENUM, SEARCH_PAGE_STOCK_DETAILS_ENUM, SEARCH_PAGE_STOCK_ENUM} from '../../../models/pages.model';
import {ComponentBaseDirective, SymbolStorageService} from '@core';

@Component({
    selector: 'app-search-stock-details',
    templateUrl: './search-stock-details-page.component.html',
    styleUrls: ['./search-stock-details-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchStockDetailsPage extends ComponentBaseDirective implements OnInit, OnDestroy {
    segmentValue = SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS;
    SEARCH_PAGE_STOCK_DETAILS_ENUM = SEARCH_PAGE_STOCK_DETAILS_ENUM;
    showSpinner = true;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private stockDetailsService: SymbolStorageService) {
        super();
    }

    ngOnInit() {
        this.stockDetailsService.setActiveSymbol(this.route.snapshot.paramMap.get('symbol') as string);
        this.stockDetailsService.getStockDetails().pipe(takeUntil(this.destroy$)).subscribe(res => {
            this.showSpinner = false;
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    segmentChanged(data: CustomEvent) {
        this.segmentValue = data.detail.value;
        this.router.navigate([`menu/search/stock/details/${this.stockDetailsService.activeSymbol}/${this.segmentValue}`]);
    }

}
