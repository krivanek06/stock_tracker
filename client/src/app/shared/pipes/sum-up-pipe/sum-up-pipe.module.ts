import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SumUpPipe} from "./sumUp.pipe";



@NgModule({
  declarations: [SumUpPipe],
  exports: [SumUpPipe]
})
export class SumUpPipeModule { }
