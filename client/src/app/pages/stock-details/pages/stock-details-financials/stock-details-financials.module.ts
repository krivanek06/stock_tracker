import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StockDetailsFinancialsPageRoutingModule } from './stock-details-financials-routing.module';

import { StockDetailsFinancialsPage } from './stock-details-financials.page';
import {StockDetailsFeatureModule} from "../../../../features/stock-details-feature/stock-details-feature.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        StockDetailsFinancialsPageRoutingModule,
        StockDetailsFeatureModule
    ],
  declarations: [StockDetailsFinancialsPage]
})
export class StockDetailsFinancialsPageModule {}
