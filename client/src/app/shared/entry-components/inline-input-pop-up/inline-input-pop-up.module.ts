import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InlineInputPopUpComponent} from "./inline-input-pop-up.component";
import {IonicModule} from "@ionic/angular";
import {FormMatInputWrapperModule} from "../../components/forms";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [InlineInputPopUpComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormMatInputWrapperModule,
    ReactiveFormsModule
  ],
  exports: [InlineInputPopUpComponent]
})
export class InlineInputPopUpModule { }
