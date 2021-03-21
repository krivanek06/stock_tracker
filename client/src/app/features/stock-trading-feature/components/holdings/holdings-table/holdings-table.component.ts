import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StTransaction} from '@core';
import {SymbolIdentification} from '@shared';

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

    showDailyChange = true;

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

    toggleDailyChange() {
        this.showDailyChange = !this.showDailyChange;
    }
}
