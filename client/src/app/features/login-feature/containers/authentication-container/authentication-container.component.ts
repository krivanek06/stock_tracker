import {LoginComponent, RegistrationComponent} from '../../components';
import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService, LoginIUser, RegisterIUser} from '@core';
import {DialogService} from '@shared';

@Component({
    selector: 'app-authentication-container',
    templateUrl: './authentication-container.component.html',
    styleUrls: ['./authentication-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationContainerComponent implements OnInit {
    @ViewChild('loginComp') loginComp: LoginComponent;
    @ViewChild('registrationComp') registrationComp: RegistrationComponent;

    segmentValue = 'login';

    constructor(private loginFeatureService: AuthenticationService,
                private router: Router) {
    }

    ngOnInit() {

    }

    segmentChanged(event: CustomEvent) {
        this.segmentValue = event.detail.value;
    }

    async normalLogin(data: LoginIUser) {
        try {
            await this.loginFeatureService.normalLogin(data);
            this.router.navigate(['/menu/dashboard']);
        } catch (e) {
            this.loginComp.loginForm.reset();
            DialogService.presentToast(e.message);
        }
    }

    async registration(registerIUser: RegisterIUser) {
        try {
            await this.loginFeatureService.normalRegistration(registerIUser);
            this.router.navigate(['/menu/dashboard']);
        } catch (e) {
            this.registrationComp.registrationForm.reset();
            DialogService.presentToast(e.message);
        }
    }

    async signInWithGoogle() {
        await this.loginFeatureService.googleSignIn();
        //await this.router.navigate(['/menu/dashboard']);
    }

    signInWithFacebook() {
        // TODO
    }
}
