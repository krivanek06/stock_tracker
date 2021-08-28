import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { GenericChartModule } from '@shared';
import { MarketChartBuilderComponent } from './market-chart-builder.component';

@NgModule({
	declarations: [MarketChartBuilderComponent],
	imports: [CommonModule, GenericChartModule, IonicModule],
	exports: [MarketChartBuilderComponent],
})
export class MarketChartBuilderModule {}
