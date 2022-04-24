import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { FormLockInputModule } from '../form-lock-input/form-lock-input.module';
import { FormMatInputWrapperModule } from '../form-mat-input-wrapper/form-mat-input-wrapper.module';
import { FormMatInputLockWrapperComponent } from './form-mat-input-lock-wrapper.component';

@NgModule({
	declarations: [FormMatInputLockWrapperComponent],
	imports: [
		CommonModule,
		FormMatInputWrapperModule,
		FormLockInputModule,
		ReactiveFormsModule,
		MatIconModule,
		MatButtonModule,
		MatTooltipModule,
		TranslateModule,
	],
	exports: [FormMatInputLockWrapperComponent],
})
export class FormMatInputLockWrapperModule {}
