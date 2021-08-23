import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupCreateFormComponent} from "./group-create-form.component";
import {DisableControlDirectiveModule, FormMatInputWrapperModule, UploaderModule} from "@shared";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatInputModule} from "@angular/material/input";
import {MatIconModule} from "@angular/material/icon";
import {MatTooltipModule} from "@angular/material/tooltip";
import {UserAccountInfoListModule, UserAccountSearchModule} from "@account-feature";



@NgModule({
  declarations: [GroupCreateFormComponent],
  imports: [
    CommonModule,
    FormMatInputWrapperModule,
    UploaderModule,
    IonicModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatInputModule,
    MatIconModule,
    MatTooltipModule,
    DisableControlDirectiveModule,
    UserAccountSearchModule,
    UserAccountInfoListModule
  ],
  exports: [GroupCreateFormComponent]
})
export class GroupCreateFormModule { }
