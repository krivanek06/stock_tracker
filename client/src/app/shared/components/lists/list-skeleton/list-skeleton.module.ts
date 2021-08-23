import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ListSkeletonComponent} from "./list-skeleton.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [ListSkeletonComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [ListSkeletonComponent]
})
export class ListSkeletonModule { }
