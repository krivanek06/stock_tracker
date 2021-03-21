import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {marketValueChange, SymbolIdentification} from '@shared';
import {StTransaction} from '@core';

@Component({
    selector: 'app-holdings-table-body-item',
    templateUrl: './holdings-table-body-item.component.html',
    styleUrls: ['./holdings-table-body-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class HoldingsTableBodyItemComponent implements OnInit {
    @Input() transaction: StTransaction;
    @Input() currentPrice: number;
    @Input() userPortfolioTotal: number;
    @Input() clickable = true;
    @Input() showDailyChange = true;

    @Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

    constructor() {
    }

    ngOnInit(): void {
    }

    itemClicked() {
        if (!this.clickable) {
            return;
        }
        this.itemClickedEmitter.emit(this.createSymbolIdentification());
    }


    private createSymbolIdentification(): SymbolIdentification {
        return {symbol: this.transaction.summary.symbol, name: this.transaction.summary.longName};
    }

}
