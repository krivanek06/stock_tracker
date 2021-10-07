import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PortfolioChangeChartModule, PortfolioGrowthChartModule } from '@stock-trading-feature';
import { ComposedPortfolioChartsComponent } from './composed-portfolio-charts.component';

@NgModule({
	declarations: [ComposedPortfolioChartsComponent],
	imports: [CommonModule, IonicModule, PortfolioGrowthChartModule, PortfolioChangeChartModule],
	exports: [ComposedPortfolioChartsComponent],
})
export class ComposedPortfolioChartsModule {}
