import { ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterIUser } from '@core';
import { DialogService, emailValidator, requiredValidator } from '@shared';

@Component({
	selector: 'app-registration',
	templateUrl: './registration.component.html',
	styleUrls: ['./registration.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RegistrationComponent implements OnInit {
	@Output() registrationEmitter: EventEmitter<RegisterIUser> = new EventEmitter<RegisterIUser>();
	registrationForm!: FormGroup;

	constructor(private formBuilder: FormBuilder) {}

	get email(): AbstractControl {
		return this.registrationForm.get('email') as AbstractControl;
	}

	get password1(): AbstractControl {
		return this.registrationForm.get('password1') as AbstractControl;
	}

	get password2(): AbstractControl {
		return this.registrationForm.get('password2') as AbstractControl;
	}

	ngOnInit() {
		this.registrationForm = this.formBuilder.group({
			email: ['', [requiredValidator, emailValidator]],
			password1: ['', requiredValidator],
			password2: ['', requiredValidator],
		});
	}

	register() {
		if (this.registrationForm.invalid) {
			return;
		}
		if (this.password1.value !== this.password2.value) {
			this.password1.patchValue(null);
			this.password2.patchValue(null);
			this.password1.updateValueAndValidity();
			this.password2.updateValueAndValidity();
			DialogService.showNotificationBar('Passwords do not match!', 'error');
			return;
		}

		this.registrationEmitter.emit({
			email: this.email.value,
			password1: this.password1.value,
			password2: this.password2.value,
		});
	}
}
