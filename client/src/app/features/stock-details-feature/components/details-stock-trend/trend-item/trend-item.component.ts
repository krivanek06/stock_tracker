import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-trend-item',
	templateUrl: './trend-item.component.html',
	styleUrls: ['./trend-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TrendItemComponent implements OnInit {
	@Input() trend?: string;
	@Input() trendTitle!: string;
	@Input() additionalClasses!: string;

	constructor() {}

	ngOnInit() {}
}
