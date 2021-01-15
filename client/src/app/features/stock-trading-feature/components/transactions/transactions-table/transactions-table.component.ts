import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StTransaction, StTransactionOperationEnum} from '../../../../../api/customGraphql.service';

@Component({
    selector: 'app-transactions-table',
    templateUrl: './transactions-table.component.html',
    styleUrls: ['./transactions-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TransactionsTableComponent implements OnInit {
    @Input() transactions: StTransaction[] = [];


    StTransactionOperationEnum = StTransactionOperationEnum;

    constructor() {
    }

    ngOnInit() {
    }

}
