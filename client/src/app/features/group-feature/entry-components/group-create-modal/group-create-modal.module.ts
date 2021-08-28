import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { IonicModule } from '@ionic/angular';
import { GroupCreateFormModule } from '../../components';
import { GroupCreateModalComponent } from './group-create-modal.component';

@NgModule({
	declarations: [GroupCreateModalComponent],
	imports: [CommonModule, IonicModule, GroupCreateFormModule, MatDatepickerModule, MatNativeDateModule],
	exports: [GroupCreateModalComponent],
})
export class GroupCreateModalModule {}
