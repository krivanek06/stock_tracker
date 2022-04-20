import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-price-change-item',
	templateUrl: './price-change-item.component.html',
	styleUrls: ['./price-change-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PriceChangeItemComponent implements OnInit {
	@Input() price?: number | null = null;
	@Input() priceChange?: number | null = null;
	@Input() pricePosition: 'left' | 'right' | 'bottom' = 'right';
	//@Input() priceText?: string;
	@Input() showIcon = true;
	@Input() isPercent = false;
	@Input() showNAIfPriceZero = false;
	@Input() showDollarSignOnPrice = false;
	@Input() applyEndOnSmDown = false;
	@Input() applyEndOnXsDown = false;

	constructor() {}

	ngOnInit() {
		// can be infinity
		this.priceChange = Number.isFinite(this.priceChange) ? this.priceChange : null;
	}
}
