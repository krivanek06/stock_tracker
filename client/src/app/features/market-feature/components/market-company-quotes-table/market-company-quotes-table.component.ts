import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {marketValueChange, SymbolIdentification} from '@shared';
import {StfmCompanyQuote} from '@core';

@Component({
    selector: 'app-market-company-quotes-table',
    templateUrl: './market-company-quotes-table.component.html',
    styleUrls: ['./market-company-quotes-table.component.scss'],
    // changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class MarketCompanyQuotesTableComponent implements OnInit {
    @Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

    @Input() stfmCompanyQuotes: StfmCompanyQuote[] = [];
    @Input() skeletonLength = 10;
    @Input() showImage: boolean = true;

    constructor() {
    }

    ngOnInit() {
    }

    itemClicked(symbol: string, name: string) {
        this.itemClickedEmitter.emit({symbol, name});
    }

}
