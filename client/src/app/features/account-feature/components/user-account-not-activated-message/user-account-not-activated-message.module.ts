import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserAccountNotActivatedMessageComponent} from "./user-account-not-activated-message.component";
import {InformationCardModule} from "@shared";



@NgModule({
  declarations: [UserAccountNotActivatedMessageComponent],
  imports: [
    CommonModule,
    InformationCardModule
  ],
  exports: [UserAccountNotActivatedMessageComponent]
})
export class UserAccountNotActivatedMessageModule { }
