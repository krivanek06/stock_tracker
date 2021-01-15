import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {StockDetailsService} from '../../../../../features/stock-details-feature/services/stock-details.service';
import {ComponentBase} from '../../../../../shared/utils/component-base/component.base';
import {takeUntil} from 'rxjs/operators';
import {SEARCH_PAGE_ENUM, SEARCH_PAGE_STOCK_DETAILS_ENUM, SEARCH_PAGE_STOCK_ENUM} from '../../../models/pages.model';

@Component({
    selector: 'app-search-stock-details',
    templateUrl: './search-stock-details-page.component.html',
    styleUrls: ['./search-stock-details-page.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchStockDetailsPage extends ComponentBase implements OnInit, OnDestroy {
    segmentValue = SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS;
    SEARCH_PAGE_STOCK_DETAILS_ENUM = SEARCH_PAGE_STOCK_DETAILS_ENUM;
    showSpinner = true;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private stockDetailsService: StockDetailsService) {
        super();
    }

    ngOnInit() {
        this.stockDetailsService.activeSymbol = this.route.snapshot.paramMap.get('symbol');
        this.stockDetailsService.getStockDetails().pipe(takeUntil(this.destroy$)).subscribe(res => {
            this.showSpinner = false;
        });
    }

    ngOnDestroy() {
        super.ngOnDestroy();
    }

    segmentChanged(data: CustomEvent) {
        this.segmentValue = data.detail.value;
        this.router.navigate([`menu/search/${SEARCH_PAGE_ENUM.STOCK}/${SEARCH_PAGE_STOCK_ENUM.DETAILS}/${this.stockDetailsService.activeSymbol}/${this.segmentValue}`]);
    }

}
