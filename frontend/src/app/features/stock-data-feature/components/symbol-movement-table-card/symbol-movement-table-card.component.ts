import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {SymbolMovementData} from '../../../../shared/models/chartDataModel';
import {ChartDataIdentification} from '../../../../shared/models/sharedModel';

@Component({
    selector: 'app-symbol-movement-table-card',
    templateUrl: './symbol-movement-table-card.component.html',
    styleUrls: ['./symbol-movement-table-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SymbolMovementTableCardComponent implements OnInit {
    @Input() title: string;
    @Input() symbolMovementData: SymbolMovementData[];

    @Output() moreInformation: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();

    constructor() {
    }

    ngOnInit() {
    }

    showMoreInformation(symbol: string, name: string) {
        this.moreInformation.emit({symbol, name});
    }

}


