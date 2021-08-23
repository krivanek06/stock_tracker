import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {StockSearchComponent} from "./stock-search.component";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";
import {ListSkeletonModule, StockInfoIdentificationItemModule} from "@shared";



@NgModule({
  declarations: [StockSearchComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule,
    StockInfoIdentificationItemModule,
    ListSkeletonModule
  ],
  exports: [StockSearchComponent]
})
export class StockSearchModule { }
