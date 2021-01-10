import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StTransaction, StTransactionOperationEnum} from '../../../../../api/customGraphql.service';
import {TransactionsTableEnum} from '../transactions.enum';

@Component({
    selector: 'app-transactions-table',
    templateUrl: './transactions-table.component.html',
    styleUrls: ['./transactions-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsTableComponent implements OnInit {
    @Input() transactions: StTransaction[] = [];
    @Input() displayedLabels: TransactionsTableEnum[] = [];


    StTransactionOperationEnum = StTransactionOperationEnum;
    TransactionsTableEnum = TransactionsTableEnum;

    constructor() {
    }

    ngOnInit() {
    }

}
