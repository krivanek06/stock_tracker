import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import {
	ClickableDirectiveModule,
	DefaultImgDirectiveModule,
	NumberFormatterPipeModule,
	PositionChangeItemModule,
	PriceChangeItemModule,
	PriceCompareItemModule,
} from '@shared';
import { GroupUserBaseInformationComponent } from './group-user-base-information.component';

@NgModule({
	declarations: [GroupUserBaseInformationComponent],
	imports: [
		CommonModule,
		IonicModule,
		DefaultImgDirectiveModule,
		NumberFormatterPipeModule,
		PriceChangeItemModule,
		PriceCompareItemModule,
		PositionChangeItemModule,
		ClickableDirectiveModule,
		MatIconModule,
		MatTooltipModule,
	],
	exports: [GroupUserBaseInformationComponent],
})
export class GroupUserBaseInformationModule {}
