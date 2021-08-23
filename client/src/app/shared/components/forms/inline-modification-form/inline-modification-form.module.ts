import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {InlineModificationFormComponent} from "./inline-modification-form.component";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";



@NgModule({
  declarations: [InlineModificationFormComponent],
  imports: [
    CommonModule,
    IonicModule,
    ReactiveFormsModule
  ],
  exports: [InlineModificationFormComponent]
})
export class InlineModificationFormModule { }
