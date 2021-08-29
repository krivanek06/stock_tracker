import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlTicketService, StTicketCreateValues } from '@core';
import { DialogService } from '@shared';

@Component({
	selector: 'app-ticket-form-container',
	templateUrl: './ticket-form-container.component.html',
	styleUrls: ['./ticket-form-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketFormContainerComponent implements OnInit {
	constructor(private graphqlTicketService: GraphqlTicketService) {}

	ngOnInit(): void {}

	async submitForm(ticketValues: StTicketCreateValues) {
		await this.graphqlTicketService.createTicket(ticketValues).toPromise();
		DialogService.presentToast('You have successfully submitted your ticket');
	}
}
