import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormMatInputLockWrapperModule, FormMatInputWrapperModule, UploaderModule } from '@shared';
import { UserAccountFormComponent } from './user-account-form.component';

@NgModule({
	declarations: [UserAccountFormComponent],
	imports: [
		CommonModule,
		UploaderModule,
		MatTooltipModule,
		MatButtonModule,
		ReactiveFormsModule,
		FormMatInputWrapperModule,
		FormMatInputLockWrapperModule,
	],
	exports: [UserAccountFormComponent],
})
export class UserAccountFormModule {}
