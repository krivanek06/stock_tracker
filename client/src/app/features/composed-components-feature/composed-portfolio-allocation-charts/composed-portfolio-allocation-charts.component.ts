import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StHolding } from '@core';
import { ChartType, WindowService } from '@shared';

@Component({
	selector: 'app-composed-portfolio-allocation-charts',
	templateUrl: './composed-portfolio-allocation-charts.component.html',
	styleUrls: ['./composed-portfolio-allocation-charts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ComposedPortfolioAllocationChartsComponent implements OnInit {
	@Input() holdings: StHolding[] = [];
	@Input() portfolioCash: number;
	@Input() portfolioInvested: number;
	@Input() portfolioChartHeightPrct: number = 40;
	ChartType = ChartType;

	portfolioChartHeight: number;

	constructor() {}

	ngOnInit(): void {
		this.portfolioChartHeight = WindowService.getWindowHeightPrctInPx(this.portfolioChartHeightPrct);
	}
}
