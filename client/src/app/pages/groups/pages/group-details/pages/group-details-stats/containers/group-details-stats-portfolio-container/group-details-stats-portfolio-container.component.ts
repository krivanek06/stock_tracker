import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StGroupAllData } from '@core';
import { ChartType } from '@shared';

@Component({
	selector: 'app-group-details-stats-portfolio-container',
	templateUrl: './group-details-stats-portfolio-container.component.html',
	styleUrls: ['./group-details-stats-portfolio-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsStatsPortfolioContainerComponent implements OnInit {
	@Input() groupAllData: StGroupAllData;

	ChartType = ChartType;

	constructor() {}

	ngOnInit() {}
}
