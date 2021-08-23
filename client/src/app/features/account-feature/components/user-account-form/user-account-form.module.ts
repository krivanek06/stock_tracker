import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserAccountFormComponent} from "./user-account-form.component";
import {FormMatInputLockWrapperModule, FormMatInputWrapperModule, UploaderModule} from "@shared";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [UserAccountFormComponent],
  imports: [
    CommonModule,
    UploaderModule,
    IonicModule,
    ReactiveFormsModule,
    FormMatInputWrapperModule,
    FormMatInputLockWrapperModule
  ],
  exports: [UserAccountFormComponent]
})
export class UserAccountFormModule { }
