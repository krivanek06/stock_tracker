import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointState } from '@angular/cdk/layout/breakpoints-observer';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StGroupAllData, StHolding } from '@core';
import { BREAK_POINTS, ChartType } from '@shared';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-group-details-stats-holdings-charts-container',
	templateUrl: './group-details-stats-holdings-charts-container.component.html',
	styleUrls: ['./group-details-stats-holdings-charts-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsStatsHoldingsChartsContainerComponent implements OnInit {
	@Input() groupAllData: StGroupAllData;

	holdings: StHolding[] = [];
	breakpointSmDown$: Observable<BreakpointState>;
	ChartType = ChartType;

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit() {
		this.holdings = this.groupAllData.groupMemberData.holdings.map((d) => d.holding);
		this.breakpointSmDown$ = this.breakpointObserver.observe([BREAK_POINTS.SM_DOWN]);
	}
}
