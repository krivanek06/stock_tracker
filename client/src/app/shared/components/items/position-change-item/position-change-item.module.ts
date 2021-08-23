import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PositionChangeItemComponent} from "./position-change-item.component";
import {IonicModule} from "@ionic/angular";
import {NumberFormatterPipeModule} from "../../../pipes";



@NgModule({
  declarations: [
    PositionChangeItemComponent
  ],
  imports: [
    CommonModule,
    IonicModule,
    NumberFormatterPipeModule
  ],
  exports: [
    PositionChangeItemComponent
  ]
})
export class PositionChangeItemModule { }
