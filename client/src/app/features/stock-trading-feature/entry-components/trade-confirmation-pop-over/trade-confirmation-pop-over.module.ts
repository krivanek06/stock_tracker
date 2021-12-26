import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { IonicModule } from '@ionic/angular';
import { FormMatInputWrapperModule } from '@shared';
import { TradingBidAskModule } from './../../components/trading';
import { TradeConfirmationPopOverComponent } from './trade-confirmation-pop-over.component';

@NgModule({
	declarations: [TradeConfirmationPopOverComponent],
	imports: [IonicModule, CommonModule, ReactiveFormsModule, TradingBidAskModule, FormMatInputWrapperModule, MatDialogModule],
	exports: [TradeConfirmationPopOverComponent],
})
export class TradeConfirmationPopOverModule { }
