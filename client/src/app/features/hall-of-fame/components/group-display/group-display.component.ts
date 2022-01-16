import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StGroupIdentificationDataFragment, StPortfolioChange } from '@core';
import { HallOfFameColors } from 'src/app/pages/hall-of-fame/hall-of-fame.model';

@Component({
	selector: 'app-group-display',
	templateUrl: './group-display.component.html',
	styleUrls: ['./group-display.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDisplayComponent implements OnInit {
	@Input() title!: string;
	@Input() groups: StGroupIdentificationDataFragment[] | null = [];
	@Input() colorIndex!: number;
	@Input() portfolioChangeKey?: keyof StPortfolioChange;

	HallOfFameColors = HallOfFameColors;
	constructor(private router: Router) {}

	ngOnInit(): void {}

	visitGroup({ id }: StGroupIdentificationDataFragment): void {
		console.log('visit', id);
		this.router.navigateByUrl(`menu/groups/${id}`);
	}
}
