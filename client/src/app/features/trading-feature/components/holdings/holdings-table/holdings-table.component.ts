import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StPortfolio, StTransaction} from '../../../../../api/customGraphql.service';
import {SymbolIdentification} from '../../../../../shared/models/sharedModel';
import {HoldingsTableEnum} from '../holdings-table.enum';

@Component({
    selector: 'app-holdings-table',
    templateUrl: './holdings-table.component.html',
    styleUrls: ['./holdings-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoldingsTableComponent implements OnInit {
    @Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

    @Input() stTransactions: StTransaction[];
    @Input() userPortfolioTotal: number;
    @Input() clickable = true;
    @Input() displayedLabels: HoldingsTableEnum[] = [];

    HoldingsTableEnum = HoldingsTableEnum;

    constructor() {
    }

    ngOnInit() {
    }

    itemClicked(symbolIdentification: SymbolIdentification) {
        if (!this.clickable) {
            return;
        }
        this.itemClickedEmitter.emit(symbolIdentification);
    }
}
