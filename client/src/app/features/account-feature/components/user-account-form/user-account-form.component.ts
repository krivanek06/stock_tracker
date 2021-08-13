import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
	Component,
	EventEmitter,
	Input,
	OnInit,
	Output,
	QueryList,
	ViewChild,
	ViewChildren,
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StUserEditDataInput, StUserPublicData } from '@core';
import {
	AsyncValidatorStats,
	FormMatInputLockWrapperComponent,
	maxLengthValidator,
	requiredValidator,
	UploadedFile,
	UploaderComponent,
} from '@shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { convertUserAccountFormToStUserEditDataInput } from '../../models';
import { AsyncValidatorFinhubKeyValidity } from './../../validators';

@Component({
	selector: 'app-user-account-form',
	templateUrl: './user-account-form.component.html',
	styleUrls: ['./user-account-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAccountFormComponent implements OnInit {
	@Output() submitClickedEmitter: EventEmitter<StUserEditDataInput> = new EventEmitter<StUserEditDataInput>();

	@Input() user: StUserPublicData;

	@ViewChild('uploader') uploader: UploaderComponent;
	@ViewChildren(FormMatInputLockWrapperComponent) formWrappers: QueryList<FormMatInputLockWrapperComponent>;

	form: FormGroup;

	finhubValidity$: Observable<AsyncValidatorStats>;

	constructor(private fb: FormBuilder, private asyncValidatorFinhubKeyValidity: AsyncValidatorFinhubKeyValidity, private cd: ChangeDetectorRef) {}

	get finnhubKey(): AbstractControl {
		return this.form.get('finnhubKey');
	}

	get nickName(): AbstractControl {
		return this.form.get('nickName');
	}

	get photoURL(): AbstractControl {
		return this.form.get('photoURL');
	}

	get formWasEdited(): boolean {
		return this.user.userPrivateData.finnhubKey !== this.finnhubKey.value || this.user.nickName !== this.nickName.value;
	}

	ngOnInit() {
		this.initForm();
		this.finhubValidity$ = this.finnhubKey.statusChanges.pipe(map((status) => (this.finnhubKey.disabled ? 'VALID' : status)));

		this.finhubValidity$.subscribe(console.log);
	}

	async submit() {
		this.form.markAsDirty();
		this.form.markAllAsTouched();

		if (!this.form.invalid) {
			this.submitClickedEmitter.emit(convertUserAccountFormToStUserEditDataInput(this.user.id, this.form.getRawValue()));
			this.cancel();
		}
	}

	uploadedImage(files: UploadedFile[]) {
		this.form.get('photoURL').patchValue(files[0].downloadURL);
	}

	cancel() {
		this.uploader.clearImages();
		this.photoURL.disable();
		this.formWrappers.forEach((form) => form.resetForm(true));
	}

	private initForm() {
		this.form = this.fb.group({
			displayName: [{ value: this.user.userPrivateData.displayName, disabled: true }, [requiredValidator]],
			email: [{ value: this.user.userPrivateData.email, disabled: true }, [requiredValidator]],
			finnhubKey: [
				{ value: this.user.userPrivateData.finnhubKey, disabled: true },
				{
					validators: [requiredValidator, maxLengthValidator(100)],
					asyncValidators: [this.asyncValidatorFinhubKeyValidity.createValidator()],
					updateOn: 'blur',
				},
			],
			nickName: [{ value: this.user.nickName, disabled: true }, [requiredValidator, maxLengthValidator(30)]],
			photoURL: [{ value: this.user.photoURL, disabled: true }, [requiredValidator]],
			locale: [{ value: this.user.locale, disabled: true }, [Validators.required]],
		});
	}
}
