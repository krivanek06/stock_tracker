import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { LoaderWrapperModule, PriceCompareItemModule } from '@shared';
import { FinancialChartModule } from '../../components';
import { DefaultImgDirectiveModule } from '../../directives';
import { FinancialChartContainerComponent } from './financial-chart-container.component';

@NgModule({
	declarations: [FinancialChartContainerComponent],
	imports: [CommonModule, MatButtonModule, PriceCompareItemModule, FinancialChartModule, DefaultImgDirectiveModule, LoaderWrapperModule],
	exports: [FinancialChartContainerComponent],
})
export class FinancialChartContainerModule {}
