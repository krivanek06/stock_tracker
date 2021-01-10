import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-price-change-item',
    templateUrl: './price-change-item.component.html',
    styleUrls: ['./price-change-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceChangeItemComponent implements OnInit {
    @Input() price: number;
    @Input() priceChange: number;
    @Input() isPercent = false;
    @Input() lighterVersion = false;

    isPositive: boolean;
    isNegative: boolean;

    constructor() {
    }

    ngOnInit() {
        this.isPositive = this.price > 0 || this.priceChange > 0;
        this.isNegative = this.price < 0 || this.priceChange < 0;
    }

}
