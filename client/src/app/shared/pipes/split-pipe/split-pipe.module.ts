import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitPipe} from "./split.pipe";



@NgModule({
  declarations: [SplitPipe],
  exports: [SplitPipe]
})
export class SplitPipeModule { }
