import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SymbolIdentification} from '@shared';

@Component({
    selector: 'app-market-earnings-table',
    templateUrl: './market-earnings-table.component.html',
    styleUrls: ['./market-earnings-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketEarningsTableComponent implements OnInit {
    @Output() clickedItemEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

    // @Input() earnings: StEventCalendarEarningsData[] = [];
    @Input() clickable = false;

    constructor() {
    }

    ngOnInit() {
    }

    clickedItem(symbol: string, name: string) {
        if (!this.clickable) {
            return;
        }
        this.clickedItemEmitter.emit({name, symbol});
    }
}
