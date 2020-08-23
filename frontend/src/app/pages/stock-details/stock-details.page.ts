import {Component, OnDestroy, OnInit} from '@angular/core';
import {StockFundamentalsApiService} from '../../api/stock-fundamentals-api.service';
import {Observable, Subject} from 'rxjs';
import {
    StockDetails,
} from '../../features/stock-details-feature/model/stockDetails';
import {ActivatedRoute} from '@angular/router';
import {Apollo} from 'apollo-angular';

@Component({
    selector: 'app-stock-details',
    templateUrl: './stock-details.page.html',
    styleUrls: ['./stock-details.page.scss'],
})
export class StockDetailsPage implements OnInit {

    stockDetails$: Observable<StockDetails>;
    test = false;

    constructor(
        private stockApiService: StockFundamentalsApiService,
        private apollo: Apollo,
        private route: ActivatedRoute
    ) {
    }

    ngOnInit() {
        const symbol = this.route.snapshot.paramMap.get('symbol');

        this.stockDetails$ = this.stockApiService.getStockDetails(symbol);
    }

}
