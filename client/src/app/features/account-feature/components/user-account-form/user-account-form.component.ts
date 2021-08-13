import {
	ChangeDetectionStrategy,
	Component,
	EventEmitter,
	Input,
	OnChanges,
	OnInit,
	Output,
	QueryList,
	SimpleChanges,
	ViewChild,
	ViewChildren,
} from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StUserEditDataInput, StUserPublicData } from '@core';
import { Confirmable, FormMatInputLockWrapperComponent, UploadedFile, UploaderComponent } from '@shared';
import { convertUserAccountFormToStUserEditDataInput } from '../../models';

@Component({
	selector: 'app-user-account-form',
	templateUrl: './user-account-form.component.html',
	styleUrls: ['./user-account-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserAccountFormComponent implements OnChanges, OnInit {
	@Output() submitClickedEmitter: EventEmitter<StUserEditDataInput> = new EventEmitter<StUserEditDataInput>();

	@Input() user: StUserPublicData;

	@ViewChild('uploader') uploader: UploaderComponent;
	@ViewChildren(FormMatInputLockWrapperComponent) formWrappers: QueryList<FormMatInputLockWrapperComponent>;

	form: FormGroup;

	constructor(private fb: FormBuilder) {}

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

	// needed to show user new data in form
	ngOnChanges(changes: SimpleChanges): void {
		/* console.log('user account form', changes);
		if (changes.user && changes.user.currentValue) {
			this.initForm();
		} */
	}

	ngOnInit() {
		this.initForm();
	}

	@Confirmable('Please confirm editing account information')
	async submit() {
		this.submitClickedEmitter.emit(convertUserAccountFormToStUserEditDataInput(this.user.id, this.form.getRawValue()));
		this.cancel();
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
			displayName: [{ value: this.user.userPrivateData.displayName, disabled: true }, [Validators.required]],
			email: [{ value: this.user.userPrivateData.email, disabled: true }, [Validators.required]],
			finnhubKey: [{ value: this.user.userPrivateData.finnhubKey, disabled: true }, [Validators.required, Validators.maxLength(150)]],
			nickName: [{ value: this.user.nickName, disabled: true }, [Validators.required, Validators.maxLength(50)]],
			photoURL: [{ value: this.user.photoURL, disabled: true }, [Validators.required]],
			locale: [{ value: this.user.locale, disabled: true }, [Validators.required]],
		});
	}
}
