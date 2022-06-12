import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { IonicModule } from '@ionic/angular';
import { GenericChartModule } from '@shared';
import { MarketChartBuilderComponent } from './market-chart-builder.component';
@NgModule({
	declarations: [MarketChartBuilderComponent],
	imports: [CommonModule, GenericChartModule, IonicModule, MatDialogModule, MatProgressSpinnerModule],
	exports: [MarketChartBuilderComponent],
})
export class MarketChartBuilderModule {}
