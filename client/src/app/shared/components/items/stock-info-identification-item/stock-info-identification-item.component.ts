import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StfmCompanyQuote} from '@core';

@Component({
    selector: 'app-stock-info-identification-item',
    templateUrl: './stock-info-identification-item.component.html',
    styleUrls: ['./stock-info-identification-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockInfoIdentificationItemComponent implements OnInit {
    @Output() clickedEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Input() companyQuote: StfmCompanyQuote;

    constructor() {
    }

    ngOnInit() {
    }

    clickedSymbol() {
        this.clickedEmitter.emit();
    }

}
