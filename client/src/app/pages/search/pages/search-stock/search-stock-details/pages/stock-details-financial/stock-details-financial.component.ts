import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {QueryStockDetailsQuery, StockDetails} from '../../../../../../../api/customGraphql.service';
import {Observable} from 'rxjs';
import {StockDetailsService} from '../../../../../../../features/stock-details-feature/services/stock-details.service';

enum STATEMENT_TYPE {
    BALANCE_SHEET = 'Balance sheet',
    INCOME_STATEMENT = 'Income statement',
    CASH_FLOW = 'Cash flow'
}

@Component({
    selector: 'app-stock-details-financial',
    templateUrl: './stock-details-financial.component.html',
    styleUrls: ['./stock-details-financial.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StockDetailsFinancialComponent implements OnInit {
    stockDetails$: Observable<StockDetails>;

    activeStatement = STATEMENT_TYPE.BALANCE_SHEET;
    STATEMENT_TYPE = STATEMENT_TYPE;

    constructor(private stockDetailsService: StockDetailsService) {
    }


    ngOnInit() {
        this.stockDetails$ = this.stockDetailsService.getStockDetails();
        this.stockDetails$.subscribe(console.log);
    }


    changeActiveStatement(event: CustomEvent) {
        this.activeStatement = event.detail.value;
    }
}
