import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Summary} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-stock-info-list-identification',
    templateUrl: './stock-info-list-identification.component.html',
    styleUrls: ['./stock-info-list-identification.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class StockInfoListIdentificationComponent implements OnInit {
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
