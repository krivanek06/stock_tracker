import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { IonicModule } from '@ionic/angular';
import { ClickableDirectiveModule, FormMatInputWrapperModule } from '@shared';
import { GroupMemberSortModule } from '../../pipes';
import { GroupUserBaseInformationModule } from '../group-user-base-information/group-user-base-information.module';
import { GroupMembersTableComponent } from './group-members-table.component';

@NgModule({
	declarations: [GroupMembersTableComponent],
	imports: [
		CommonModule,
		ClickableDirectiveModule,
		MatCardModule,
		FormMatInputWrapperModule,
		ReactiveFormsModule,
		GroupMemberSortModule,
		GroupUserBaseInformationModule,
		IonicModule,
	],
	exports: [GroupMembersTableComponent],
})
export class GroupMembersTableModule {}
