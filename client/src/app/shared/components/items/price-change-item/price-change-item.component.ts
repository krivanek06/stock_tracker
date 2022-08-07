import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-price-change-item',
	templateUrl: './price-change-item.component.html',
	styleUrls: ['./price-change-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceChangeItemComponent implements OnInit {
	@Input() price?: string | number | null = null;
	@Input() priceChange?: number | null = null;
	@Input() pricePosition: 'left' | 'right' | 'bottom' | 'top' = 'right';
	//@Input() priceText?: string;
	@Input() showIcon = true;
	@Input() isPercent?: boolean = false;
	@Input() showNAIfPriceZero = false;
	@Input() showDollarSignOnPrice = false;
	@Input() showPrice = true;

	@Input() classText: string = 'text-gray-500 text-base';

	constructor() {}

	get shouldBeInline(): boolean {
		return (this.pricePosition === 'left' || this.pricePosition === 'right') && !!this.priceChange && !!this.price;
	}

	ngOnInit() {
		// can be infinity
		this.priceChange = Number.isFinite(this.priceChange) ? this.priceChange : null;
	}
}
