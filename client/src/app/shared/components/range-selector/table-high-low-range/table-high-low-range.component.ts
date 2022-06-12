import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-table-high-low-range',
	templateUrl: './table-high-low-range.component.html',
	styleUrls: ['./table-high-low-range.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableHighLowRangeComponent implements OnInit {
	@Input() min!: number;
	@Input() max!: number;
	@Input() value?: number | null;

	constructor() {}

	ngOnInit() {}
}
