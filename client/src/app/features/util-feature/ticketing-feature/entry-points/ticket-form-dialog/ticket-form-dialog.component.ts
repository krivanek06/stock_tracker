import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { GraphqlTicketService, StTicketCreateValues } from '@core';
import { DialogService } from '@shared';

@Component({
	selector: 'app-ticket-form-dialog',
	templateUrl: './ticket-form-dialog.component.html',
	styleUrls: ['./ticket-form-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketFormDialogComponent implements OnInit {
	constructor(private graphqlTicketService: GraphqlTicketService, private dialogRef: MatDialogRef<TicketFormDialogComponent>) {}

	ngOnInit(): void {}

	async submitForm(ticketValues: StTicketCreateValues) {
		await this.graphqlTicketService.createTicket(ticketValues).toPromise();
		DialogService.showNotificationBar('You have successfully submitted your ticket');
	}

	closeDialog(): void {
		this.dialogRef.close();
	}
}
