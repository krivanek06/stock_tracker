import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-position-change-item',
	templateUrl: './position-change-item.component.html',
	styleUrls: ['./position-change-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PositionChangeItemComponent implements OnInit {
	@Input() increaseBy!: number;
	@Input() applyNumberFormatter = false;

	constructor() {}

	ngOnInit() {}
}
