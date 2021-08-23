import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SplitKeyToTitlecasePipe} from "./split-key-to-titlecase.pipe";



@NgModule({
  declarations: [SplitKeyToTitlecasePipe],
  exports: [SplitKeyToTitlecasePipe]
})
export class SplitKeyToTitlecasePipeModule { }
