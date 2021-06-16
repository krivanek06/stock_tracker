import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StTransaction, StTransactionOperationEnum} from '@core';

@Component({
    selector: 'app-transactions-table',
    templateUrl: './transactions-table.component.html',
    styleUrls: ['./transactions-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsTableComponent implements OnInit {
    @Input() transactions: StTransaction[] = [];
    @Input() showUser = false;
    @Input() showDate = true;
    @Input() showReturn = true;
    @Input() applyLastChildStyle = false;

    StTransactionOperationEnum = StTransactionOperationEnum;

    constructor() {
    }

    ngOnInit() {
    }

}
