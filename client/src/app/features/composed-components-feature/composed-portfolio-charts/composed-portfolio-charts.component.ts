import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { GraphqlQueryService, StPortfolioSnapshot } from '@core';
import { BREAK_POINTS, GenericChartSeries, WindowService } from '@shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
	selector: 'app-composed-portfolio-charts',
	templateUrl: './composed-portfolio-charts.component.html',
	styleUrls: ['./composed-portfolio-charts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComposedPortfolioChartsComponent implements OnInit {
	@Input() stPortfolioSnapshots: StPortfolioSnapshot[] = [];
	portfolioChartHeight!: number;
	portfolioComparisonSeries: GenericChartSeries[] = [];
	isXXLDownScreen$!: Observable<boolean>;

	private portfolioBalance: number[] = [];
	private portfolioTimestamps: number[] = [];

	constructor(private breakpointObserver: BreakpointObserver, private graphqlQueryService: GraphqlQueryService, private cd: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.portfolioChartHeight = WindowService.getWindowHeightPrctInPx(34);
		this.isXXLDownScreen$ = this.breakpointObserver.observe([BREAK_POINTS.XXL_DOWN]).pipe(map((x) => x.matches));

		//this.initComparisionChart();
	}

	// private initComparisionChart(): void {
	// 	this.graphqlQueryService.querySymbolHistoricalPrices('^GSPC', '1y').subscribe((res) => {
	// 		// acceptedTimestamps has older values, because exclude weekends, but this.stPortfolioSnapshots has weekends
	// 		const acceptedTimestamps = LodashService.takeRight(
	// 			res.price.map((p) => moment(p[0])),
	// 			this.stPortfolioSnapshots.length
	// 		);

	// 		// get only data on balance where day is same as fot S&P 500, exclude weekends
	// 		this.portfolioBalance = this.stPortfolioSnapshots
	// 			.filter((value) => {
	// 				const momentTImestamp = moment(value.date);
	// 				return acceptedTimestamps.some((t) => t.isSame(momentTImestamp, 'day'));
	// 			})
	// 			.map((x) => x.portfolioCash + x.portfolioInvested);

	// 		// shrink acceptedTimestamps to same length as portfolioBalance
	// 		this.portfolioTimestamps = LodashService.takeRight(
	// 			acceptedTimestamps.map((t) => t.valueOf()),
	// 			this.portfolioBalance.length
	// 		);

	// 		// chart options
	// 		this.portfolioComparisonSeries = [
	// 			{
	// 				type: ChartType.line,
	// 				name: 'My portfolio',
	// 				data: LodashService.zipArrays(this.portfolioTimestamps, this.portfolioBalance) as number[][],
	// 				color: '#22aad9',
	// 				lineWidth: 3,
	// 			},
	// 			{
	// 				type: ChartType.line,
	// 				name: 'S&P 500',
	// 				color: '#e34c1a',
	// 				lineWidth: 3,
	// 				data: LodashService.takeRight(
	// 					res.price.map((x) => [x[0], x[4]]),
	// 					this.portfolioBalance.length
	// 				) as number[][],
	// 			},
	// 		];

	// 		this.cd.detectChanges();
	// 	});
	// }
}
