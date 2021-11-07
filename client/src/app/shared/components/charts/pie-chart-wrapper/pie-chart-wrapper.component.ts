import { BreakpointObserver } from '@angular/cdk/layout';
import { BreakpointState } from '@angular/cdk/layout/breakpoints-observer';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { BREAK_POINTS, ChartType, GenericChartSeriesData } from '../../../models';

@Component({
	selector: 'app-pie-chart-wrapper',
	templateUrl: './pie-chart-wrapper.component.html',
	styleUrls: ['./pie-chart-wrapper.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PieChartWrapperComponent implements OnInit {
	@Input() heightPx: number;
	@Input() chartTitle: string;
	@Input() data: GenericChartSeriesData[];

	breakpointSmDown$: Observable<BreakpointState>;
	ChartType = ChartType;

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit() {
		this.breakpointSmDown$ = this.breakpointObserver.observe([BREAK_POINTS.XS_DOWN]);
	}
}
