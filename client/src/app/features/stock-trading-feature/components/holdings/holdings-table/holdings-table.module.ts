import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { DefaultImgDirectiveModule, PriceCompareItemModule, RecommendationDirectiveModule } from '@shared';
import { HoldingsTableComponent } from './holdings-table.component';

@NgModule({
	declarations: [HoldingsTableComponent],
	imports: [CommonModule, IonicModule, DefaultImgDirectiveModule, PriceCompareItemModule, RecommendationDirectiveModule],
	exports: [HoldingsTableComponent],
})
export class HoldingsTableModule {}
