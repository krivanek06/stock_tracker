import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GraphqlTicketService, StTicket, StTicketCommentEditValues, StUserPublicData, UserStorageService } from '@core';
import { DialogService } from '@shared';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-ticket-overview-container',
	templateUrl: './ticket-overview-container.component.html',
	styleUrls: ['./ticket-overview-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketOverviewContainerComponent implements OnInit {
	@Input() showClosedButton: boolean;
	@Input() tickets: StTicket[] = [];

	user$: Observable<StUserPublicData>;

	constructor(private graphqlTicketService: GraphqlTicketService, private userStorageService: UserStorageService) {}

	ngOnInit(): void {
		this.user$ = this.userStorageService.getUser();
	}

	async closeTicket(ticket: StTicket) {
		await this.graphqlTicketService.closeTicket(ticket).toPromise();
		DialogService.presentToast(`Ticket ${ticket.id} has been closed`);
	}
	deleteTicket(ticket: StTicket) {}

	async editComment(commentEditValues: StTicketCommentEditValues) {
		await this.graphqlTicketService.commentTicketEdit(commentEditValues).toPromise();
		DialogService.presentToast(`Comment has been edited`);
	}

	async submitComment(ticket: StTicket, comment: string) {
		await this.graphqlTicketService.commentTicket(ticket, comment).toPromise();
		DialogService.presentToast(`Comment was added to ticket ${ticket.id}`);
	}
}
