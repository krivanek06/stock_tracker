import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserAccountSearchComponent} from "./user-account-search.component";
import {IonicModule} from "@ionic/angular";
import {FormMatInputWrapperModule} from "@shared";
import {ReactiveFormsModule} from "@angular/forms";
import {UserAccountInfoListModule} from "../../components";



@NgModule({
  declarations: [UserAccountSearchComponent],
  imports: [
    CommonModule,
    UserAccountInfoListModule,
    IonicModule,
    FormMatInputWrapperModule,
    ReactiveFormsModule
  ],
  exports: [UserAccountSearchComponent]
})
export class UserAccountSearchModule { }
