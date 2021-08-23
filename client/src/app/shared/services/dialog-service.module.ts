import { NgModule } from '@angular/core';
import {DialogService} from "./dialog.service";
import {IonicModule} from "@ionic/angular";
import {ConfirmationPopOverModule, InlineInputPopUpModule, OptionPickerPopOverModule} from "../entry-components";



@NgModule({
  declarations: [],
  imports: [IonicModule, InlineInputPopUpModule, ConfirmationPopOverModule, OptionPickerPopOverModule],
  providers: [DialogService],
  exports: [IonicModule, InlineInputPopUpModule, ConfirmationPopOverModule, OptionPickerPopOverModule],
})
export class DialogServiceModule { }
