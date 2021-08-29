import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TicketFormModule } from '../../components';
import { TicketFormContainerComponent } from './ticket-form-container.component';

@NgModule({
	declarations: [TicketFormContainerComponent],
	imports: [CommonModule, TicketFormModule],
	exports: [TicketFormContainerComponent],
})
export class TicketFormContainerModule {}
