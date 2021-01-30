import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-price-change-item',
    templateUrl: './price-change-item.component.html',
    styleUrls: ['./price-change-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceChangeItemComponent implements OnInit {
    @Input() price: number;
    @Input() priceChange: number;
    @Input() showIcon = true;
    @Input() isPercent = false;
    @Input() lighterBiggerVersion = false;

    constructor() {
    }

    ngOnInit() {
    }

}
