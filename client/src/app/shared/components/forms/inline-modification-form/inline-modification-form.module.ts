import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { FormMatInputWrapperModule } from '../form-mat-input-wrapper/form-mat-input-wrapper.module';
import { InlineModificationFormComponent } from './inline-modification-form.component';

@NgModule({
	declarations: [InlineModificationFormComponent],
	imports: [CommonModule, ReactiveFormsModule, FormMatInputWrapperModule, MatButtonModule, MatIconModule, MatTooltipModule],
	exports: [InlineModificationFormComponent],
})
export class InlineModificationFormModule {}
