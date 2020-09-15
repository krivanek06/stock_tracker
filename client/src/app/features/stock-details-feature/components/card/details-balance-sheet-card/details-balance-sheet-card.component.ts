import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {BalanceSheet, BalanceSheetData} from '../../../model/stockDetails';

@Component({
    selector: 'app-details-balance-sheet-card',
    templateUrl: './details-balance-sheet-card.component.html',
    styleUrls: ['./details-balance-sheet-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsBalanceSheetCardComponent implements OnInit {
    @Input() balanceSheets: BalanceSheetData[];

    constructor() {
    }

    ngOnInit() {
    }


}
