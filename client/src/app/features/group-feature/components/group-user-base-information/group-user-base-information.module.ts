import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupUserBaseInformationComponent} from "./group-user-base-information.component";
import {IonicModule} from "@ionic/angular";
import {
  DefaultImgDirectiveModule,
  NumberFormatterPipeModule, PositionChangeItemModule,
  PriceChangeItemModule,
  PriceCompareItemModule
} from "@shared";



@NgModule({
  declarations: [GroupUserBaseInformationComponent],
  imports: [
    CommonModule,
    IonicModule,
    DefaultImgDirectiveModule,
    NumberFormatterPipeModule,
    PriceChangeItemModule,
    PriceCompareItemModule,
    PositionChangeItemModule
  ],
  exports: [GroupUserBaseInformationComponent]
})
export class GroupUserBaseInformationModule { }
