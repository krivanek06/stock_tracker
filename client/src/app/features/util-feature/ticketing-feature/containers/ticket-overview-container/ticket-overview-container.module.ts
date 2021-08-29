import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TicketOverviewModule } from '../../components';
import { TicketOverviewContainerComponent } from './ticket-overview-container.component';

@NgModule({
	declarations: [TicketOverviewContainerComponent],
	imports: [CommonModule, TicketOverviewModule],
	exports: [TicketOverviewContainerComponent],
})
export class TicketOverviewContainerModule {}
