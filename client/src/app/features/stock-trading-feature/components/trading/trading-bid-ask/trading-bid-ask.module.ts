import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TradingBidAskPage } from './trading-bid-ask.page';

@NgModule({
	declarations: [TradingBidAskPage],
	imports: [CommonModule, IonicModule],
	exports: [TradingBidAskPage],
})
export class TradingBidAskModule {}
