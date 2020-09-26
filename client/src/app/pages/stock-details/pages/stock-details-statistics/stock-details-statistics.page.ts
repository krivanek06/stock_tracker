import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {StockDetailsService} from '../../../../features/stock-details-feature/services/stock-details.service';
import {Observable} from 'rxjs';
import {QueryStockDetailsQuery} from '../../../../api/customGraphql.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-stock-details-statistics',
    templateUrl: './stock-details-statistics.page.html',
    styleUrls: ['./stock-details-statistics.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsStatisticsPage implements OnInit {
    details$: Observable<QueryStockDetailsQuery>;

    segmentValue = 'statistics';

    constructor(private stockDetailsService: StockDetailsService,
                private route: ActivatedRoute) {
    }


    ngOnInit(): void {
        const symbol = this.route.snapshot.paramMap.get('symbol');
        console.log('symbol', symbol);
        this.details$ = this.stockDetailsService.getStockDetails(symbol);

        this.details$.subscribe(x => console.log('StockDetailsStatisticsPage', x));
    }

    segmentChanged(data: CustomEvent) {
        console.log(data.detail)
        this.segmentValue = data.detail.value;
    }
}
