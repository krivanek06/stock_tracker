import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {marketValueChange} from '../../../animations';

@Component({
    selector: 'app-price-compare-item',
    templateUrl: './price-compare-item.component.html',
    styleUrls: ['./price-compare-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        marketValueChange
    ]
})
export class PriceCompareItemComponent implements OnInit {
    @Input() currentPrice: number;
    @Input() compareToPrice: number;
    @Input() inlineDisplay = false;
    @Input() showIcons = true;
    @Input() showPrice = true;

    constructor() {
    }

    ngOnInit() {
    }

}
