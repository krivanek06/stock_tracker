import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {DETAILS_PAGES_ENUM} from './models/DetailsEnum.model';
import {QueryStockDetailsQuery} from '../../api/customGraphql.service';
import {Observable} from 'rxjs';
import {StockDetailsService} from '../../features/stock-details-feature/services/stock-details.service';

@Component({
    selector: 'app-stock-details',
    templateUrl: './stock-details.page.html',
    styleUrls: ['./stock-details.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsPage implements OnInit {
    stockDetails$: Observable<QueryStockDetailsQuery>;

    segmentValue = DETAILS_PAGES_ENUM.STATISTICS;

    DETAILS_PAGES_ENUM = DETAILS_PAGES_ENUM;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private stockDetailsService: StockDetailsService) {
    }

    ngOnInit() {
        const symbol = this.route.snapshot.paramMap.get('symbol');
        console.log('symbol', symbol);

        this.stockDetails$ = this.stockDetailsService.getStockDetails(symbol);
    }

    segmentChanged(data: CustomEvent) {
        this.segmentValue = data.detail.value;
    }

}
