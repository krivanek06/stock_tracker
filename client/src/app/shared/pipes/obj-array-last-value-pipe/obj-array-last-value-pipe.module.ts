import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ObjArrayLastValuePipe } from './obj-array-last-value.pipe';



@NgModule({
  declarations: [
    ObjArrayLastValuePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ObjArrayLastValuePipe]
})
export class ArrayLastValuePipeModule { }
