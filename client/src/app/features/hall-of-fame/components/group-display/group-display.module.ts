import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GroupTopUsersInformationModule } from '@group-feature';
import { PositionCardModule } from '@shared';
import { GroupDisplayComponent } from './group-display.component';

@NgModule({
	declarations: [GroupDisplayComponent],
	imports: [CommonModule, PositionCardModule, GroupTopUsersInformationModule],
	exports: [GroupDisplayComponent],
})
export class GroupDisplayModule {}
