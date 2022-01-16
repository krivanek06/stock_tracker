import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StPortfolioChange, StUserIdentificationPortfolioFragmentFragment } from '@core';
import { HallOfFameColors } from '../../../../pages/hall-of-fame/hall-of-fame.model';

@Component({
	selector: 'app-user-display',
	templateUrl: './user-display.component.html',
	styleUrls: ['./user-display.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDisplayComponent implements OnInit {
	@Input() title!: string;
	@Input() userIdentifications: StUserIdentificationPortfolioFragmentFragment[] | null = [];
	@Input() colorIndex!: number;
	@Input() portfolioChangeKey?: keyof StPortfolioChange;

	HallOfFameColors = HallOfFameColors;

	constructor() {}

	ngOnInit(): void {}
}
