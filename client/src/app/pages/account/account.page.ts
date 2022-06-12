import { AccountFeatureFacadeService } from '@account-feature';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StUserEditDataInput, StUserPublicData, UserStorageService } from '@core';
import { Confirmable } from '@shared';
import { WatchlistManagerModalComponent } from '@stock-watchlist-feature';
import { Observable } from 'rxjs';
import { TicketFormDialogComponent } from 'src/app/features/util-feature/ticketing-feature/entry-points';

@Component({
	selector: 'app-account',
	templateUrl: './account.page.html',
	styleUrls: ['./account.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPage implements OnInit {
	user$!: Observable<StUserPublicData>;
	constructor(
		private userStorageService: UserStorageService,
		private userAccountService: AccountFeatureFacadeService,
		private matDialog: MatDialog
	) {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUser();
	}

	@Confirmable('Please confirm reseting account. You will start again with 100 000$ portfolio. All your holdings will be lost.')
	resetAccount() {
		this.userAccountService.resetUserAccount();
	}

	@Confirmable('Please confirm editing account information')
	editUser(editDataInput: StUserEditDataInput) {
		console.log('editing', editDataInput);
		this.userAccountService.editUser(editDataInput);
	}

	onManageWatchlists(): void {
		this.matDialog.open(WatchlistManagerModalComponent);
	}

	onRaiseTicket(): void {
		this.matDialog.open(TicketFormDialogComponent);
	}
}
