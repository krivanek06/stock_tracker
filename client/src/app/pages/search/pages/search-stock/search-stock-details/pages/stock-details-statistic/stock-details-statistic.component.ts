import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {StockDetails, SymbolStorageService} from '@core';
import {ChartType} from '@shared';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-stock-details-statistic',
    templateUrl: './stock-details-statistic.component.html',
    styleUrls: ['./stock-details-statistic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockDetailsStatisticComponent implements OnInit {
    stockDetails$: Observable<StockDetails>;
    ChartType = ChartType;

    constructor(private symbolStorageService: SymbolStorageService) {
    }


    ngOnInit(): void {
        this.stockDetails$ = this.symbolStorageService.getStockDetails();
    }
}
