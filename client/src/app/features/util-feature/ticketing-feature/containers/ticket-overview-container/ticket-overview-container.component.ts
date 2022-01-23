import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { GraphqlTicketService, StTicketCommentEditValues, StTicketFragmentFragment, StUserPublicData, UserStorageService } from '@core';
import { DialogService } from '@shared';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-ticket-overview-container',
	templateUrl: './ticket-overview-container.component.html',
	styleUrls: ['./ticket-overview-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketOverviewContainerComponent implements OnInit {
	@Input() tickets: StTicketFragmentFragment[] = [];

	user$!: Observable<StUserPublicData>;
	isAdmin$!: Observable<boolean>;

	constructor(private graphqlTicketService: GraphqlTicketService, private userStorageService: UserStorageService) {}

	ngOnInit(): void {
		this.user$ = this.userStorageService.getUser();
		this.isAdmin$ = this.userStorageService.isAdmin();
	}

	async closeTicket(ticket: StTicketFragmentFragment) {
		await this.graphqlTicketService.closeTicket(ticket).toPromise();
		DialogService.showNotificationBar(`Ticket ${ticket.id} has been closed`);
	}
	async deleteTicket(ticket: StTicketFragmentFragment) {
		await this.graphqlTicketService.deleteTicket(ticket).toPromise();
		DialogService.showNotificationBar(`Ticket ${ticket.id} has been deleted`);
	}

	async editComment(commentEditValues: StTicketCommentEditValues) {
		await this.graphqlTicketService.commentTicketEdit(commentEditValues).toPromise();
		DialogService.showNotificationBar(`Comment has been edited`);
	}

	async submitComment(ticket: StTicketFragmentFragment, comment: string) {
		await this.graphqlTicketService.commentTicket(ticket, comment).toPromise();
		DialogService.showNotificationBar(`Comment was added to ticket ${ticket.id}`);
	}
}
