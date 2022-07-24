import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MomentService } from '@shared';

@Component({
	selector: 'app-user-account-deactivated-message',
	templateUrl: './user-account-deactivated-message.component.html',
	styleUrls: ['./user-account-deactivated-message.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeactivatedAccountComponent implements OnInit {
	@Input() lastSignInDate?: string;

	constructor() {}

	// is more than 14 days ?
	get isMoreThanThreshHoldDays(): boolean {
		return MomentService.isMoreThan(this.lastSignInDate, 14);
	}

	ngOnInit(): void {}
}
