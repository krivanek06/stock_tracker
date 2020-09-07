import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {LoginIUser} from '../../model/userModel';
import {AuthFeatureService} from '../../services/auth-feature.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-authentication-container',
    templateUrl: './authentication-container.component.html',
    styleUrls: ['./authentication-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationContainerComponent implements OnInit {
    showLogin = true;

    constructor(private authFeatureService: AuthFeatureService,
                private router: Router) {
    }

    ngOnInit() {

    }

    segmentChanged(event: CustomEvent) {
        console.log(event.detail.value);
        this.showLogin = event.detail.value === 'login';
    }

    normalLogin(data: LoginIUser) {
        console.log('normalLogin', data);
        // TODO
    }

    async signInWithGoogle() {
        await this.authFeatureService.googleSignIn();
        await this.router.navigate(['/menu/dashboard']);
    }

    signInWithFacebook() {
        // TODO
    }
}
