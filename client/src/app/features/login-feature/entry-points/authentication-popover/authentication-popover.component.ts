import { ChangeDetectionStrategy, Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { AuthenticationService, componentDestroyed, LoginIUser, RegisterIUser, UserStorageService } from '@core';
import { DialogService } from '@shared';
import { filter, takeUntil } from 'rxjs/operators';
import { LoginComponent, RegistrationComponent } from '../../components';

@Component({
	selector: 'app-authentication-popover',
	templateUrl: './authentication-popover.component.html',
	styleUrls: ['./authentication-popover.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthenticationPopoverComponent implements OnInit, OnDestroy {
	@ViewChild('loginComp') loginComp!: LoginComponent;
	@ViewChild('registrationComp') registrationComp!: RegistrationComponent;

	segmentValue = 'login';
	showSpinner = false;

	constructor(
		private authenticationService: AuthenticationService,
		private userStorageService: UserStorageService,
		private matDialogRef: MatDialogRef<AuthenticationPopoverComponent>
	) {}

	ngOnDestroy(): void {}

	ngOnInit() {
		this.monitorUserLogInState();
	}

	segmentChanged(event: any) {
		this.segmentValue = event.detail.value;
	}

	async normalLogin(data: LoginIUser) {
		this.toggleSpinner();
		if (!(await this.authenticationService.normalLogin(data))) {
			DialogService.showNotificationBar('Your email or password was invalid, please try again', 'error');
			this.loginComp.loginForm.reset();
		}
		this.toggleSpinner();
	}

	async registration(registerIUser: RegisterIUser) {
		try {
			this.toggleSpinner();
			await this.authenticationService.normalRegistration(registerIUser);
			this.toggleSpinner();
			// this.router.navigate(['/menu/dashboard']);
		} catch (e: any) {
			this.toggleSpinner();
			this.registrationComp.registrationForm.reset();
			DialogService.showNotificationBar(e.message);
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

	private monitorUserLogInState() {
		this.userStorageService
			.getUser()
			.pipe(
				filter((u) => !!u),
				takeUntil(componentDestroyed(this))
			)
			.subscribe(() => {
				this.matDialogRef.close();
			});
	}
}
