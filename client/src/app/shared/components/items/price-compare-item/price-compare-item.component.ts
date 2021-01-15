import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-price-compare-item',
    templateUrl: './price-compare-item.component.html',
    styleUrls: ['./price-compare-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PriceCompareItemComponent implements OnInit {
    @Input() currentPrice: number;
    @Input() compareToPrice: number;
    @Input() inlineDisplay = false;

    /**
     * version 1 - show  currentPrice - compareToPrice
     */
    @Input() versionType = 1; // 1 / 2

    constructor() {
    }

    ngOnInit() {
    }

}
