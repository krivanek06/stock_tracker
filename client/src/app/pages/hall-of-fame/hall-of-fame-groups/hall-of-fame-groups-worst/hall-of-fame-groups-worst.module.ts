import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GroupDisplayModule } from '@hall-of-fame';
import { LoaderWrapperModule } from '@shared';
import { HallOfFameGroupsWorstComponent } from './hall-of-fame-groups-worst.component';

@NgModule({
	declarations: [HallOfFameGroupsWorstComponent],
	imports: [CommonModule, GroupDisplayModule, LoaderWrapperModule],
	exports: [HallOfFameGroupsWorstComponent],
})
export class HallOfFameGroupsWorstModule {}
