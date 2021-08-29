import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GraphqlTicketService, StTicket } from '@core';
import { DialogService } from '@shared';

@Component({
	selector: 'app-ticket-overview-container',
	templateUrl: './ticket-overview-container.component.html',
	styleUrls: ['./ticket-overview-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketOverviewContainerComponent implements OnInit {
	@Input() showManagementButtons: boolean;
	@Input() tickets: StTicket[] = [];

	constructor(private graphqlTicketService: GraphqlTicketService) {}

	ngOnInit(): void {}

	async closeTicket(ticket: StTicket) {
		await this.graphqlTicketService.closeTicket(ticket).toPromise();
		DialogService.presentToast(`Ticket ${ticket.id} has been closed`);
	}
	deleteTicket(ticket: StTicket) {}

	async submitComment(ticket: StTicket, comment: string) {
		await this.graphqlTicketService.commentTicket(ticket, comment).toPromise();
		DialogService.presentToast(`Comment was added to ticket ${ticket.id}`);
	}
}
