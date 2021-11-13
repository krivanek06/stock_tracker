import { AccountFeatureFacadeService } from '@account-feature';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StUserEditDataInput, StUserPublicData, UserStorageService } from '@core';
import { ConfirmableWithCheckbox } from '@shared';
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

	@ConfirmableWithCheckbox('Please confirm reseting account. You will start again with 100 000$ portfolio. All your holdings will be lost.')
	resetAccount() {
		this.userAccountService.resetUserAccount();
	}

	@ConfirmableWithCheckbox('Please confirm editing account information', 'confirm')
	editUser(editDataInput: StUserEditDataInput) {
		console.log('editing', editDataInput);
		this.userAccountService.editUser(editDataInput);
	}
}
