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
    @Input() pricePosition: 'left' | 'right' = 'right';
    @Input() priceText: string;
    @Input() showIcon = true;
    @Input() isPercent = false;

    constructor() {
    }

    ngOnInit() {
    }

}
