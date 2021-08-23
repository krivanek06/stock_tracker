import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {IncreasePrctPipe} from "./increase-prct.pipe";



@NgModule({
  declarations: [
    IncreasePrctPipe
  ],
  exports: [
    IncreasePrctPipe
  ]
})
export class IncreasePrctPipeModule { }
