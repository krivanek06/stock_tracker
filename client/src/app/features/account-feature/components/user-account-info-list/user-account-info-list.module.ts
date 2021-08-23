import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserAccountInfoListComponent} from "./user-account-info-list.component";
import {IonicModule} from "@ionic/angular";
import {DefaultImgDirectiveModule, PriceChangeItemModule} from "@shared";



@NgModule({
  declarations: [UserAccountInfoListComponent],
  imports: [
    CommonModule,
    IonicModule,
    PriceChangeItemModule,
    DefaultImgDirectiveModule
  ],
  exports: [UserAccountInfoListComponent]
})
export class UserAccountInfoListModule { }
