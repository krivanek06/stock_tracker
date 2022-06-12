import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatDialogModule } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';
import { GroupCreateFormModule } from '../../components';
import { GroupCreateModalComponent } from './group-create-modal.component';

@NgModule({
	declarations: [GroupCreateModalComponent],
	imports: [CommonModule, IonicModule, GroupCreateFormModule, MatDialogModule],
	exports: [GroupCreateModalComponent],
})
export class GroupCreateModalModule {}
