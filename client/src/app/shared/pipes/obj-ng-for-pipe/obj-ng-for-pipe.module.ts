import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ObjNgForPipe} from "./obj-ng-for.pipe";



@NgModule({
  declarations: [
    ObjNgForPipe
  ],
  exports: [
    ObjNgForPipe
  ]
})
export class ObjNgForPipeModule { }
