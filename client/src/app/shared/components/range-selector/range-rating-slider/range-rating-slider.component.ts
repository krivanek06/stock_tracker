import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-range-rating-slider',
	templateUrl: './range-rating-slider.component.html',
	styleUrls: ['./range-rating-slider.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RangeRatingSliderComponent implements OnInit {
	@Output() valueEmitter: EventEmitter<number> = new EventEmitter<number>();

	@Input() name!: string;
	@Input() value!: number;
	@Input() min: number = 0;
	@Input() max: number = 100;
	@Input() step: number = 1;
	@Input() isPercent = false;

	constructor() {}

	ngOnInit() {
		if (this.isPercent) {
			this.max = 1;
			this.step = 0.001;
		}
	}

	change(change: number) {
		this.valueEmitter.emit(change);
	}
}
