import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DetailsReportStatementModalComponent} from "./details-report-statement-modal.component";
import {IonicModule} from "@ionic/angular";
import {NumberFormatterPipeModule} from "@shared";



@NgModule({
  declarations: [DetailsReportStatementModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    NumberFormatterPipeModule
  ],
  exports: [DetailsReportStatementModalComponent]
})
export class DetailsReportStatementModalModule { }
