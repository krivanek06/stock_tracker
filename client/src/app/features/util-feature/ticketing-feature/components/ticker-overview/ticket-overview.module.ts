import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { IonicModule } from '@ionic/angular';
import { FormMatInputWrapperModule, RelativeTimePipeModule } from '@shared';
import { TickerOverviewComponent } from './ticker-overview.component';

@NgModule({
	declarations: [TickerOverviewComponent],
	imports: [CommonModule, IonicModule, MatExpansionModule, RelativeTimePipeModule, ReactiveFormsModule, FormMatInputWrapperModule],
	exports: [TickerOverviewComponent],
})
export class TicketOverviewModule {}
