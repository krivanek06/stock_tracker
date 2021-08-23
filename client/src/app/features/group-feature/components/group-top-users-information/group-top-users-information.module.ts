import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupTopUsersInformationComponent} from "./group-top-users-information.component";
import {GroupBaseInformationModule} from "../group-base-information/group-base-information.module";
import {PortfolioIncreaseChartModule} from "@stock-trading-feature";
import {GroupUserBaseInformationModule} from "../group-user-base-information/group-user-base-information.module";



@NgModule({
  declarations: [GroupTopUsersInformationComponent],
  imports: [
    CommonModule,
    GroupBaseInformationModule,
    PortfolioIncreaseChartModule,
    GroupUserBaseInformationModule
  ],
  exports: [GroupTopUsersInformationComponent]
})
export class GroupTopUsersInformationModule { }
