import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RelativeTimePipe} from "./relatimeTime.pipe";



@NgModule({
  declarations: [
    RelativeTimePipe
  ],
  exports: [
    RelativeTimePipe
  ]
})
export class RelativeTimePipeModule { }
