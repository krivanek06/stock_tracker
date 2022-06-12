import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { FormMatInputWrapperModule } from '@shared';
import { TicketFormComponent } from './ticket-form.component';

@NgModule({
	declarations: [TicketFormComponent],
	imports: [CommonModule, ReactiveFormsModule, FormMatInputWrapperModule, MatButtonModule, MatIconModule],
	exports: [TicketFormComponent],
})
export class TicketFormModule {}
