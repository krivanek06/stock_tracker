import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserAccountSearchFormComponent} from "./user-account-search-form.component";
import {FormMatInputWrapperModule} from "@shared";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [UserAccountSearchFormComponent],
  imports: [
    CommonModule,
    FormMatInputWrapperModule,
    ReactiveFormsModule
  ],
  exports: [UserAccountSearchFormComponent]
})
export class UserAccountSearchFormModule { }
