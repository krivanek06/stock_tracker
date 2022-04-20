import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-table-increasing-item',
	templateUrl: './table-increasing-item.component.html',
	styleUrls: ['./table-increasing-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableIncreasingItemComponent implements OnInit {
	@Input() data?: number[] | null = [];
	@Input() name!: string;

	constructor() {}

	ngOnInit() {}
}
