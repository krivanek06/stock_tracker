import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HoldingsTotalInvestedPipe} from "./holdings-total-invested.pipe";



@NgModule({
  declarations: [
    HoldingsTotalInvestedPipe
  ],
  exports: [
    HoldingsTotalInvestedPipe
  ]
})
export class HoldingsTotalInvestedPipeModule { }
