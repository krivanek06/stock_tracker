import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StfmRating } from '@core';

@Component({
	selector: 'app-details-rating',
	templateUrl: './details-rating.component.html',
	styleUrls: ['./details-rating.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsRatingComponent implements OnInit {
	@Input() rating!: StfmRating;

	constructor() {}

	ngOnInit() {}
}
