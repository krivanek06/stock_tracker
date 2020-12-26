import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {StUserEditDataInput, StUserPublicData} from '../../api/customGraphql.service';
import {Observable} from 'rxjs';
import {UserAccountService} from '../../features/account-feature/services/user-account.service';

@Component({
    selector: 'app-account',
    templateUrl: './account.page.html',
    styleUrls: ['./account.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AccountPage implements OnInit {
    user$: Observable<StUserPublicData>;
    editing = false;

    constructor(private authService: AuthFeatureService,
                private userAccountService: UserAccountService) {
    }

    ngOnInit() {
        this.user$ = this.authService.getUser();
    }

    toggleEdit() {
        this.editing = !this.editing;
    }

    resetAccount() {
        this.userAccountService.resetUserAccount();
    }

    editUser(editDataInput: StUserEditDataInput) {
        this.userAccountService.editUser(editDataInput);
    }
}
