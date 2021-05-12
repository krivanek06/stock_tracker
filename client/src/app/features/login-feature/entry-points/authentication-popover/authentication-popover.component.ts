import {LoginComponent, RegistrationComponent} from '../../components';
import {ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {AuthenticationService, componentDestroyed, LoginIUser, RegisterIUser, UserStorageService} from '@core';
import {DialogService} from '@shared';
import {PopoverController} from '@ionic/angular';
import {filter, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-authentication-popover',
    templateUrl: './authentication-popover.component.html',
    styleUrls: ['./authentication-popover.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AuthenticationPopoverComponent implements OnInit, OnDestroy {
    @ViewChild('loginComp') loginComp: LoginComponent;
    @ViewChild('registrationComp') registrationComp: RegistrationComponent;

    segmentValue = 'login';
    showSpinner = false;

    constructor(private authenticationService: AuthenticationService,
                private userStorageService: UserStorageService,
                private popoverController: PopoverController) {
    }

    ngOnDestroy(): void {

    }

    ngOnInit() {
       this.monitorUserLogInState();
    }

    segmentChanged(event: CustomEvent) {
        this.segmentValue = event.detail.value;
    }

    async normalLogin(data: LoginIUser) {
        try {
            this.toggleSpinner();
            await this.authenticationService.normalLogin(data);
            this.toggleSpinner();
            //this.router.navigate(['/menu/dashboard']);
        } catch (e) {
            this.toggleSpinner();
            this.loginComp.loginForm.reset();
            DialogService.presentToast(e.message);
        }
    }

    async registration(registerIUser: RegisterIUser) {
        try {
            this.toggleSpinner();
            await this.authenticationService.normalRegistration(registerIUser);
            this.toggleSpinner();
            // this.router.navigate(['/menu/dashboard']);
        } catch (e) {
            this.toggleSpinner();
            this.registrationComp.registrationForm.reset();
            DialogService.presentToast(e.message);
        }
    }

    async signInWithGoogle() {
        await this.authenticationService.googleSignIn();
        //await this.router.navigate(['/menu/dashboard']);
    }

    signInWithFacebook() {
        // TODO
    }

    private toggleSpinner() {
        this.showSpinner = !this.showSpinner;
    }

    private monitorUserLogInState(){
        this.userStorageService.getUser().pipe(
            filter(u => !!u),
            takeUntil(componentDestroyed(this))
        ).subscribe(() => {
            this.popoverController.dismiss();
        });
    }
}
