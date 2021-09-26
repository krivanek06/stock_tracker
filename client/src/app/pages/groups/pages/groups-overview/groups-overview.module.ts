import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { GroupTopUsersInformationModule } from '@group-feature';
import { IonicModule } from '@ionic/angular';
import { GenericCardModule } from '@shared';
import { GroupsOverviewComponent } from './groups-overview.component';

@NgModule({
	declarations: [GroupsOverviewComponent],
	imports: [CommonModule, IonicModule, MatTooltipModule, GenericCardModule, GroupTopUsersInformationModule],
	exports: [GroupsOverviewComponent],
})
export class GroupsOverviewModule {}
