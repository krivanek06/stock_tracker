import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {StUserPublicData} from '../../api/customGraphql.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginPage implements OnInit {

    user$: Observable<StUserPublicData>;

    constructor(private authFeatureService: AuthFeatureService,
                private router: Router) {
    }

    ngOnInit() {
        this.user$ = this.authFeatureService.getUser();
    }


    redirectToApp() {
        this.router.navigate(['/menu/dashboard']);
    }

}
