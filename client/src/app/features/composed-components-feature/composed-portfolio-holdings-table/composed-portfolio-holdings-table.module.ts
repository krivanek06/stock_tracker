import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { GenericCardModule, GenericListModule } from '@shared';
import { HoldingsTableModule } from '@stock-trading-feature';
import { ComposedPortfolioHoldingsTableComponent } from './composed-portfolio-holdings-table.component';

@NgModule({
	declarations: [ComposedPortfolioHoldingsTableComponent],
	imports: [CommonModule, MatIconModule, GenericCardModule, GenericListModule, HoldingsTableModule],
	exports: [ComposedPortfolioHoldingsTableComponent],
})
export class ComposedPortfolioHoldingsTableModule {}
