import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GroupDisplayModule } from '@hall-of-fame';
import { LoaderWrapperModule } from '@shared';
import { HallOfFameGroupsBestComponent } from './hall-of-fame-groups-best.component';

@NgModule({
	declarations: [HallOfFameGroupsBestComponent],
	imports: [CommonModule, GroupDisplayModule, LoaderWrapperModule],
	exports: [HallOfFameGroupsBestComponent],
})
export class HallOfFameGroupsBestModule {}
