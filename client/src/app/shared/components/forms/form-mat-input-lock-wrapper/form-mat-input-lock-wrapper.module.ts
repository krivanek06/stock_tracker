import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormMatInputLockWrapperComponent} from './form-mat-input-lock-wrapper.component';
import {FormLockInputModule} from '../form-lock-input/form-lock-input.module';
import {FormMatInputWrapperModule} from '../form-mat-input-wrapper/form-mat-input-wrapper.module';
import {ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTooltipModule} from '@angular/material/tooltip';


@NgModule({
    declarations: [
        FormMatInputLockWrapperComponent
    ],
    imports: [
        CommonModule,
        FormMatInputWrapperModule,
        FormLockInputModule,
        ReactiveFormsModule,
        MatIconModule,
        MatButtonModule,
        MatTooltipModule
    ],
    exports: [
        FormMatInputLockWrapperComponent
    ]
})
export class FormMatInputLockWrapperModule {
}
