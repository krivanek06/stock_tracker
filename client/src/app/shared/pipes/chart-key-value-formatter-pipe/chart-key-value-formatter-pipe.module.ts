import { NgModule } from '@angular/core';
import {ChartKeyValueFormatterPipe} from "./chart-key-value-formatter.pipe";



@NgModule({
  declarations: [
    ChartKeyValueFormatterPipe
  ],
  exports: [
    ChartKeyValueFormatterPipe
  ]
})
export class ChartKeyValueFormatterPipeModule { }
