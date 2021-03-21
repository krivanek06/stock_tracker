import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {StUserPublicData, UserStorageService} from '@core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage implements OnInit {

    user$: Observable<StUserPublicData>;

    constructor(private userStorageService: UserStorageService,
                private router: Router) {
    }

    ngOnInit() {
        this.user$ = this.userStorageService.getUser();
    }


    redirectToApp() {
        this.router.navigate(['/menu/dashboard']);
    }

}
