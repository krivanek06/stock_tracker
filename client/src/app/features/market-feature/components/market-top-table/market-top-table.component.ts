import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {marketValueChange} from '../../../../shared/animations/marketValueChange.animation';
import {SymbolIdentification} from '../../../../shared/models/sharedModel';
import {StMarketTopTableSymbolData} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-market-top-table',
    templateUrl: './market-top-table.component.html',
    styleUrls: ['./market-top-table.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class MarketTopTableComponent implements OnInit {
    @Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

    @Input() topTableSymbolData: StMarketTopTableSymbolData[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    itemClicked(symbol: string, name: string) {
        this.itemClickedEmitter.emit({symbol, name});
    }

}
