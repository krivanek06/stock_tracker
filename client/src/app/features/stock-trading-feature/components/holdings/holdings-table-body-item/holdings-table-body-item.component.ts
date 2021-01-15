import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {marketValueChange} from '../../../../../shared/animations/marketValueChange.animation';
import {StTransaction} from '../../../../../api/customGraphql.service';
import {SymbolIdentification} from '../../../../../shared/models/sharedModel';

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
