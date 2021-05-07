import {Component, OnInit} from '@angular/core';
import {StockDetails, SymbolStorageService} from '@core';
import {Observable} from 'rxjs';
import {ChartType} from '@shared';

@Component({
    selector: 'app-stock-details-strategies',
    templateUrl: './stock-details-strategies.component.html',
    styleUrls: ['./stock-details-strategies.component.scss'],
})
export class StockDetailsStrategiesComponent implements OnInit {
    stockDetails$: Observable<StockDetails>;
    activeSymbol$: Observable<string>;


    ChartType = ChartType;

    constructor(private symbolStorageService: SymbolStorageService,
    ) {
    }

    ngOnInit() {
        this.activeSymbol$ = this.symbolStorageService.getActiveSymbol();
        this.stockDetails$ = this.symbolStorageService.getStockDetails();
    }

}
