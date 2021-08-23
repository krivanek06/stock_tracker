import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserIdentificationInfoComponent} from "./user-identification-info.component";
import {IonicModule} from "@ionic/angular";
import {DefaultImgDirectiveModule} from "@shared";



@NgModule({
  declarations: [UserIdentificationInfoComponent],
  imports: [
    CommonModule,
    IonicModule,
    DefaultImgDirectiveModule
  ],
  exports: [UserIdentificationInfoComponent]
})
export class UserIdentificationInfoModule { }
