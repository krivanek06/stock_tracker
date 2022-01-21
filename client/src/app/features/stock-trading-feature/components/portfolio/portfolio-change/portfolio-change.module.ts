import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PriceChangeItemModule } from '@shared';
import { PortfolioChangeComponent } from './portfolio-change.component';
import { PortfolioChangeItemComponent } from './portfolio-change-item/portfolio-change-item.component';

@NgModule({
	declarations: [PortfolioChangeComponent, PortfolioChangeItemComponent],
	imports: [CommonModule, IonicModule, PriceChangeItemModule],
	exports: [PortfolioChangeComponent],
})
export class PortfolioChangeModule {}
