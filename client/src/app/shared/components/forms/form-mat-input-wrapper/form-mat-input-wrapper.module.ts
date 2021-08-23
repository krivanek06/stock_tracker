import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {FormMatInputWrapperComponent} from './form-mat-input-wrapper.component';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatRadioModule} from '@angular/material/radio';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {TranslateModule} from '@ngx-translate/core';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatSliderModule} from '@angular/material/slider';
import {NumberFormatterPipeModule} from "../../../pipes";

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
    ],
    exports: [FormMatInputWrapperComponent],
})
export class FormMatInputWrapperModule {
}
