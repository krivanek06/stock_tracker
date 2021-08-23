import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {PortfolioChangeComponent} from "./portfolio-change.component";
import {IonicModule} from "@ionic/angular";
import {PriceChangeItemModule} from "@shared";



@NgModule({
  declarations: [PortfolioChangeComponent],
  imports: [
    CommonModule,
    IonicModule,
    PriceChangeItemModule
  ],
  exports: [PortfolioChangeComponent]
})
export class PortfolioChangeModule { }
