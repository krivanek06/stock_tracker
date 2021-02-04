import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Summary} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-stock-info-identification-item',
    templateUrl: './stock-info-identification-item.component.html',
    styleUrls: ['./stock-info-identification-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockInfoIdentificationItemComponent implements OnInit {
    @Output() clickedEmitter: EventEmitter<any> = new EventEmitter<any>();

    @Input() summary: Summary;
    @Input() clickable = true;

    constructor() {
    }

    ngOnInit() {
    }

    clickedSymbol() {
        this.clickedEmitter.emit();
    }

}
