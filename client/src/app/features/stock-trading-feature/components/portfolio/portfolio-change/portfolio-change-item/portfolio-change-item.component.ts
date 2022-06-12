import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { marketValueChange } from '@shared';

@Component({
	selector: 'app-portfolio-change-item',
	templateUrl: './portfolio-change-item.component.html',
	styleUrls: ['./portfolio-change-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [marketValueChange],
})
export class PortfolioChangeItemComponent implements OnInit {
	@Input() title!: string;
	@Input() balanceChange!: number;
	@Input() balanceChangePrct?: number;

	// whether balanceChangePrct should be under (false) or next to (true) balanceChange
	@Input() inlinePriceWithIncrease = true;

	constructor() {}

	ngOnInit(): void {}
}
