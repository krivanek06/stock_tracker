import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsStatementSheetComponent} from "./details-statement-sheet.component";
import {
  GenericCardModule,
  IncreasePrctPipeModule,
  ObjNgForPipeModule,
  PriceChangeItemModule, SplitKeyToTitlecasePipeModule,
  TypeofPipeModule
} from "@shared";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [DetailsStatementSheetComponent],
  imports: [
    CommonModule,
    TypeofPipeModule,
    ObjNgForPipeModule,
    IonicModule,
    IncreasePrctPipeModule,
    PriceChangeItemModule,
    GenericCardModule,
    SplitKeyToTitlecasePipeModule
  ],
  exports: [DetailsStatementSheetComponent]
})
export class DetailsStatementSheetModule { }
