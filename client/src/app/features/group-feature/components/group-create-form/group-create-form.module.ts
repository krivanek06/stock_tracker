import { UserAccountInfoListModule, UserAccountSearchModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import { DisableControlDirectiveModule, FormMatInputWrapperModule, UploaderModule } from '@shared';
import { GroupCreateFormComponent } from './group-create-form.component';

@NgModule({
	declarations: [GroupCreateFormComponent],
	imports: [
		CommonModule,
		FormMatInputWrapperModule,
		UploaderModule,
		IonicModule,
		ReactiveFormsModule,
		MatFormFieldModule,
		MatDatepickerModule,
		MatInputModule,
		MatIconModule,
		MatTooltipModule,
		DisableControlDirectiveModule,
		UserAccountSearchModule,
		UserAccountInfoListModule,
		MatNativeDateModule,
	],
	exports: [GroupCreateFormComponent],
})
export class GroupCreateFormModule {}
