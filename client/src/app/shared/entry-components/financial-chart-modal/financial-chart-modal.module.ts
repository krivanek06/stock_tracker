import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';
import { FinancialChartModalComponent } from './financial-chart-modal.component';

@NgModule({
	declarations: [FinancialChartModalComponent],
	imports: [CommonModule, IonicModule, MatDialogModule],
	exports: [FinancialChartModalComponent],
})
export class FinancialChartModalModule {}
