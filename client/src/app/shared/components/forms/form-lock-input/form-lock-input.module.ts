import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormLockInputComponent} from './form-lock-input.component';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
    declarations: [
        FormLockInputComponent
    ],
    exports: [
        FormLockInputComponent
    ],
    imports: [
        CommonModule,
        MatIconModule
    ]
})
export class FormLockInputModule {
}
