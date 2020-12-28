import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DETAILS_PAGES_ENUM} from './models/DetailsEnum.model';
import {QueryStockDetailsQuery} from '../../api/customGraphql.service';
import {Observable} from 'rxjs';
import {StockDetailsService} from '../../features/stock-details-feature/services/stock-details.service';
import {ComponentBase} from '../../shared/utils/component-base/component.base';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-stock-details',
    templateUrl: './stock-details.page.html',
    styleUrls: ['./stock-details.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsPage extends ComponentBase implements OnInit {
    segmentValue = DETAILS_PAGES_ENUM.STATISTICS;
    DETAILS_PAGES_ENUM = DETAILS_PAGES_ENUM;
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

    segmentChanged(data: CustomEvent) {
        this.segmentValue = data.detail.value;
        this.router.navigate([`menu/stock-details/${this.stockDetailsService.activeSymbol}/${this.segmentValue}`]);
    }

}
