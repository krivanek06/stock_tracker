import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StPortfolioSnapshot } from '@core';
import { BREAK_POINTS, WindowService } from '@shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-composed-portfolio-charts',
	templateUrl: './composed-portfolio-charts.component.html',
	styleUrls: ['./composed-portfolio-charts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComposedPortfolioChartsComponent implements OnInit {
	@Input() stPortfolioSnapshots: StPortfolioSnapshot[];
	portfolioChartHeight: number;
	isXXLDownScreen$: Observable<boolean>;

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit(): void {
		this.portfolioChartHeight = WindowService.getWindowHeightPrctInPx(34);
		this.isXXLDownScreen$ = this.breakpointObserver.observe([BREAK_POINTS.XXL_DOWN]).pipe(map((x) => x.matches));
	}
}
