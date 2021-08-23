import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OptionPickerPopOverComponent} from "./option-picker-pop-over.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [OptionPickerPopOverComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [OptionPickerPopOverComponent]
})
export class OptionPickerPopOverModule { }
