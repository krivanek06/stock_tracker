import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormMatInputWrapperModule } from '@shared';
import { TicketFormComponent } from './ticket-form.component';

@NgModule({
	declarations: [TicketFormComponent],
	imports: [CommonModule, IonicModule, ReactiveFormsModule, FormMatInputWrapperModule],
	exports: [TicketFormComponent],
})
export class TicketFormModule {}
