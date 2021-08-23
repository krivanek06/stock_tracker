import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupMemberOverviewModalComponent} from "./group-member-overview-modal.component";
import {IonicModule} from "@ionic/angular";
import {
  DefaultImgDirectiveModule,
  GenericCardModule,
  GenericListModule,
  PieChartWrapperModule,
  RelativeTimePipeModule
} from "@shared";
import {
  HoldingsTableModule,
  PortfolioChangeChartModule,
  PortfolioChangeModule,
  PortfolioGrowthChartModule,
  PortfolioIncreaseChartModule,
  PortfolioStateModule, TransactionsChartModule, TransactionsTableModule,
  HoldingsToPortfolioChartSeriesPipeModule,
  HoldingsToSectorChartSeriesPipeModule
} from "@stock-trading-feature";
import {MatTooltipModule} from "@angular/material/tooltip";



@NgModule({
  declarations: [GroupMemberOverviewModalComponent],
  imports: [
    CommonModule,
    IonicModule,
    DefaultImgDirectiveModule,
    RelativeTimePipeModule,
    PortfolioStateModule,
    MatTooltipModule,
    PortfolioChangeModule,
    PortfolioIncreaseChartModule,
    PortfolioGrowthChartModule,
    PortfolioChangeChartModule,
    HoldingsTableModule,
    GenericListModule,
    GenericCardModule,
    PieChartWrapperModule,
    HoldingsToPortfolioChartSeriesPipeModule,
    HoldingsToSectorChartSeriesPipeModule,
    TransactionsTableModule,
    TransactionsChartModule
  ],
  exports: [GroupMemberOverviewModalComponent]
})
export class GroupMemberOverviewModalModule { }
