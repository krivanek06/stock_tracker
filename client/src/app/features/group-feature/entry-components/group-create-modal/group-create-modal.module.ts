import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupCreateModalComponent} from "./group-create-modal.component";
import {IonicModule} from "@ionic/angular";
import {GroupCreateFormModule} from "../../components";



@NgModule({
  declarations: [GroupCreateModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    GroupCreateFormModule
  ],
  exports: [GroupCreateModalComponent]
})
export class GroupCreateModalModule { }
