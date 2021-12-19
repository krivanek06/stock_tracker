import { UserAccountInfoListModule, UserAccountSearchModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { IonicModule } from '@ionic/angular';
import { FormMatInputWrapperModule, UploaderModule } from '@shared';
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
		MatIconModule,
		MatTooltipModule,
		MatButtonModule,
		UserAccountSearchModule,
		UserAccountInfoListModule,
	],
	exports: [GroupCreateFormComponent],
})
export class GroupCreateFormModule {}
