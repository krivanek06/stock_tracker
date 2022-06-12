import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { FinancialChartContainerModule } from '@shared';
import { MarketCryptoDialogComponent } from './market-crypto-dialog.component';

@NgModule({
	declarations: [MarketCryptoDialogComponent],
	imports: [CommonModule, MatToolbarModule, MatButtonModule, MatIconModule, FinancialChartContainerModule, MatDialogModule],
})
export class MarketCryptoDialogModule {}
