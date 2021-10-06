import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { ChartType, WindowService } from '@shared';
import { StHolding } from './../../../../core/graphql-schema/customGraphql.service';

@Component({
	selector: 'app-dashboard-allocation-charts',
	templateUrl: './dashboard-allocation-charts.component.html',
	styleUrls: ['./dashboard-allocation-charts.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DashboardAllocationChartsComponent implements OnInit {
	@Input() holdings: StHolding[] = [];
	@Input() portfolioCash: number;
	@Input() portfolioInvested: number;

	portfolioChartHeight: number;
	categories: string[] = [];

	ChartType = ChartType;

	constructor() {}

	ngOnInit(): void {
		this.portfolioChartHeight = WindowService.getWindowHeightPrctInPx(40);
		this.categories = this.holdings.map((h) => h.symbol);
	}
}
