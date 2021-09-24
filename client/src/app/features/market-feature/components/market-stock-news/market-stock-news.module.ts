import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import { DefaultImgDirectiveModule, RelativeTimePipeModule } from '@shared';
import { MarketStockNewsComponent } from './market-stock-news.component';

@NgModule({
	declarations: [MarketStockNewsComponent],
	imports: [CommonModule, IonicModule, MatTooltipModule, DefaultImgDirectiveModule, RelativeTimePipeModule],
	exports: [MarketStockNewsComponent],
})
export class MarketStockNewsModule {}
