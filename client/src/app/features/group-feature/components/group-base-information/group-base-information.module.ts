import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupBaseInformationComponent} from "./group-base-information.component";
import {IonicModule} from "@ionic/angular";
import {DefaultImgDirectiveModule, RelativeTimePipeModule} from "@shared";
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [GroupBaseInformationComponent],
  imports: [
    CommonModule,
    IonicModule,
    DefaultImgDirectiveModule,
    RelativeTimePipeModule,
    MatTooltipModule
  ],
  exports: [GroupBaseInformationComponent]
})
export class GroupBaseInformationModule { }
