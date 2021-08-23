import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsHoldersComponent} from "./details-holders.component";
import {NumberFormatterPipeModule, PositionChangeItemModule, SumUpPipeModule} from "@shared";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [DetailsHoldersComponent],
  imports: [
    CommonModule,
    NumberFormatterPipeModule,
    IonicModule,
    PositionChangeItemModule,
    SumUpPipeModule
  ],
  exports: [DetailsHoldersComponent]
})
export class DetailsHoldersModule { }
