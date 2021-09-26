import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { GroupBaseInformationModule } from '@group-feature';
import { IonicModule } from '@ionic/angular';
import { GroupDetailsComponent } from './group-details.component';
import { GroupDetailsOverviewModule, GroupDetailsStatsModule } from './pages';

@NgModule({
	declarations: [GroupDetailsComponent],
	imports: [CommonModule, GroupBaseInformationModule, IonicModule, GroupDetailsStatsModule, GroupDetailsOverviewModule],
	exports: [GroupDetailsComponent],
})
export class GroupDetailsModule {}
