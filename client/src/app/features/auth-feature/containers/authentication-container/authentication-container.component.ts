import {IonicDialogService} from '../../../../shared/services/ionic-dialog.service';
import {RegistrationComponent} from '../../components/registration/registration.component';
import {LoginComponent} from '../../components/login/login.component';
import {ChangeDetectionStrategy, Component, OnInit, ViewChild} from '@angular/core';
import {AuthFeatureService} from '../../services/auth-feature.service';
import {Router} from '@angular/router';
import {LoginIUser, RegisterIUser} from '../../model/userModel';

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

    constructor(private authFeatureService: AuthFeatureService,
                private ionicDialogService: IonicDialogService,
                private router: Router) {
    }

    ngOnInit() {

    }

    segmentChanged(event: CustomEvent) {
        this.segmentValue = event.detail.value;
    }

    async normalLogin(data: LoginIUser) {
        try {
            await this.authFeatureService.normalLogin(data);
            this.router.navigate(['/menu/dashboard']);
        } catch (e) {
            this.loginComp.loginForm.reset();
            this.ionicDialogService.presentToast(e.message);
        }
    }

    async registration(registerIUser: RegisterIUser) {
        try {
            await this.authFeatureService.normalRegistration(registerIUser);
            this.router.navigate(['/menu/dashboard']);
        } catch (e) {
            this.registrationComp.registrationForm.reset();
            this.ionicDialogService.presentToast(e.message);
        }
    }

    async signInWithGoogle() {
        await this.authFeatureService.googleSignIn();
        //await this.router.navigate(['/menu/dashboard']);
    }

    signInWithFacebook() {
        // TODO
    }
}
