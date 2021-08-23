import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReverseArrayPipe} from "./reverse-array.pipe";



@NgModule({
  declarations: [ReverseArrayPipe],
  exports: [ReverseArrayPipe]
})
export class ReverseArrayPipeModule { }
