import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StockDetailsService} from '../../../../../../../features/stock-details-feature/services/stock-details.service';
import {StockDetails} from '../../../../../../../api/customGraphql.service';
import {ChartType} from '../../../../../../../shared/models/sharedModel';
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

    constructor(private stockDetailsService: StockDetailsService) {
    }


    ngOnInit(): void {
        this.stockDetails$ = this.stockDetailsService.getStockDetails();
    }
}
