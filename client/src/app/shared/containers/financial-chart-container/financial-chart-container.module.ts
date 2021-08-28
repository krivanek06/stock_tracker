import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FinancialChartModule, PriceChangeItemModule } from '../../components';
import { DefaultImgDirectiveModule } from '../../directives';
import { FinancialChartContainerComponent } from './financial-chart-container.component';

@NgModule({
	declarations: [FinancialChartContainerComponent],
	imports: [CommonModule, IonicModule, PriceChangeItemModule, FinancialChartModule, DefaultImgDirectiveModule],
	exports: [FinancialChartContainerComponent],
})
export class FinancialChartContainerModule {}
