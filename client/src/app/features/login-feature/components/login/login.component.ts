import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { LoginIUser } from '@core';
import { emailValidator, requiredValidator } from '@shared';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent implements OnInit {
	@Output() loginEmitter: EventEmitter<LoginIUser> = new EventEmitter<LoginIUser>();

	loginForm!: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	get email(): AbstractControl {
		return this.loginForm.get('email') as AbstractControl;
	}

	get password(): AbstractControl {
		return this.loginForm.get('password') as AbstractControl;
	}

	ngOnInit() {
		this.loginForm = this.formBuilder.group({
			email: ['', [requiredValidator, emailValidator]],
			password: ['', requiredValidator],
		});
	}

	login() {
		if (this.loginForm.invalid) {
			return;
		}
		this.loginEmitter.emit({ email: this.email.value, password: this.password.value });
	}
}
