import {Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {marketValueChange} from '../../../../shared/animations/marketValueChange.animation';
import {StockSummaryFragmentFragment, StPortfolio, StTransaction} from '../../../../api/customGraphql.service';
import {STCustomValueChange, SymbolIdentification} from '../../../../shared/models/sharedModel';

@Component({
    selector: 'app-holdings-table-body-item',
    templateUrl: './holdings-table-body-item.component.html',
    styleUrls: ['./holdings-table-body-item.component.scss'],
    animations: [
        marketValueChange
    ]
})
export class HoldingsTableBodyItemComponent implements OnInit, OnChanges {
    newCurrentPrice = 0; // saving values when websocket change current price to trigger animations

    @Input() transaction: StTransaction;
    @Input() currentPrice: number;
    @Input() userPortfolioTotal: number;
    @Input() clickable = true;

    @Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

    constructor() {
    }

    ngOnInit(): void {
    }


    ngOnChanges(changes: any): void {
        try {
            const change = changes.currentPrice as STCustomValueChange;
            if (!!change?.firstChange) {
                return;
            }
            this.newCurrentPrice = change.currentValue;
        } catch (e) {
            console.log('error in holdings table body ', e);
        }

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
