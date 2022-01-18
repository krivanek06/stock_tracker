import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTooltipModule } from '@angular/material/tooltip';
import { ComposedSearchedUserDataModule } from '@composed-components-feature';
import { IonicModule } from '@ionic/angular';
import { DefaultImgDirectiveModule, RelativeTimePipeModule } from '@shared';
import { GroupMemberOverviewModalComponent } from './group-member-overview-modal.component';

@NgModule({
	declarations: [GroupMemberOverviewModalComponent],
	imports: [
		CommonModule,
		IonicModule,
		DefaultImgDirectiveModule,
		RelativeTimePipeModule,
		MatTooltipModule,
		ComposedSearchedUserDataModule,
		MatDialogModule,
	],
	exports: [GroupMemberOverviewModalComponent],
})
export class GroupMemberOverviewModalModule {}
