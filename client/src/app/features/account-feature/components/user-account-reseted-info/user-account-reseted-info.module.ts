import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserAccountResetedInfoComponent} from "./user-account-reseted-info.component";
import {IonicModule} from "@ionic/angular";



@NgModule({
  declarations: [UserAccountResetedInfoComponent],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [UserAccountResetedInfoComponent]
})
export class UserAccountResetedInfoModule { }
