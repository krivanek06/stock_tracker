import { AccountFeatureFacadeService } from '@account-feature';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StUserEditDataInput, StUserPublicData, UserStorageService } from '@core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-account',
	templateUrl: './account.page.html',
	styleUrls: ['./account.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountPage implements OnInit {
	user$: Observable<StUserPublicData>;
	constructor(private userStorageService: UserStorageService, private userAccountService: AccountFeatureFacadeService) {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUser();
	}

	resetAccount() {
		this.userAccountService.resetUserAccount();
	}

	editUser(editDataInput: StUserEditDataInput) {
		this.userAccountService.editUser(editDataInput);
	}
}
