import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { marketValueChange } from '../../../animations';

@Component({
	selector: 'app-price-compare-item',
	templateUrl: './price-compare-item.component.html',
	styleUrls: ['./price-compare-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [marketValueChange],
})
export class PriceCompareItemComponent implements OnInit {
	@Input() currentPrice?: number | null = null;
	@Input() compareToPrice?: number | null = null;
	@Input() showIcons = true;
	@Input() showPrice = true;
	@Input() showDollarSign = true;
	@Input() pricePosition: 'left' | 'right' | 'bottom' = 'bottom';

	constructor() {}

	ngOnInit() {}

	get getDiff(): number | null {
		if (!this.currentPrice || !this.compareToPrice) {
			return null;
		}
		return this.currentPrice - this.compareToPrice;
	}

	get getDiffPrct(): number | null {
		if (!this.currentPrice || !this.compareToPrice) {
			return null;
		}
		return (this.currentPrice - this.compareToPrice) / this.compareToPrice;
	}
}
