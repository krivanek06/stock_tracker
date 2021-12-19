import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatSliderModule } from '@angular/material/slider';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { NumberFormatterPipeModule } from '../../../pipes';
import { FormMatInputWrapperComponent } from './form-mat-input-wrapper.component';
@NgModule({
	declarations: [FormMatInputWrapperComponent],
	imports: [
		CommonModule,
		ReactiveFormsModule,
		MatCheckboxModule,
		MatSlideToggleModule,
		MatRadioModule,
		MatSelectModule,
		MatTooltipModule,
		TranslateModule,
		MatIconModule,
		MatInputModule,
		MatFormFieldModule,
		MatAutocompleteModule,
		MatChipsModule,
		MatSliderModule,
		NumberFormatterPipeModule,
		MatNativeDateModule,
		MatDatepickerModule,
	],
	exports: [FormMatInputWrapperComponent],
})
export class FormMatInputWrapperModule {}
