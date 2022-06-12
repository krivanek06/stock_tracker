import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
	selector: 'app-user-account-buttons',
	templateUrl: './user-account-buttons.component.html',
	styleUrls: ['./user-account-buttons.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAccountButtonsComponent implements OnInit {
	@Output() manageWatchlistEmitter: EventEmitter<void> = new EventEmitter<void>();
	@Output() raiseTicketEmitter: EventEmitter<void> = new EventEmitter<void>();

	constructor() {}

	ngOnInit(): void {}

	onRaiseTicket(): void {
		this.raiseTicketEmitter.emit();
	}

	onManageWatchlist(): void {
		this.manageWatchlistEmitter.emit();
	}
}
