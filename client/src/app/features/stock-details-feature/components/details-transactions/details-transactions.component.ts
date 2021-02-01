import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {InsiderTransaction} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-details-transactions',
    templateUrl: './details-transactions.component.html',
    styleUrls: ['./details-transactions.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsTransactionsComponent implements OnInit {
    @Input() transactions: InsiderTransaction[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
