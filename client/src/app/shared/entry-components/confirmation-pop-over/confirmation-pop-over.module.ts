import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ConfirmationPopOverComponent} from "./confirmation-pop-over.component";
import {IonicModule} from "@ionic/angular";
import {FormsModule} from "@angular/forms";



@NgModule({
  declarations: [ConfirmationPopOverComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  exports: [ConfirmationPopOverComponent]
})
export class ConfirmationPopOverModule { }
