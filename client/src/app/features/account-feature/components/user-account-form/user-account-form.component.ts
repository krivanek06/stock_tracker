import {
	ChangeDetectionStrategy,
	ChangeDetectorRef,
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
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { StUserEditDataInput, StUserPublicData } from '@core';
import { FormMatInputLockWrapperComponent, maxLengthValidator, requiredValidator, UploadedFile, UploaderComponent } from '@shared';
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
export class UserAccountFormComponent implements OnInit, OnChanges {
	@Output() submitClickedEmitter: EventEmitter<StUserEditDataInput> = new EventEmitter<StUserEditDataInput>();

	@Input() user!: StUserPublicData;

	@ViewChild('uploader') uploader!: UploaderComponent;
	@ViewChildren(FormMatInputLockWrapperComponent) formWrappers!: QueryList<FormMatInputLockWrapperComponent>;

	form!: FormGroup;

	finhubValidity$!: Observable<string>;

	isFinnhubKeyEdited = false;
	isUserPhotoEdited = false;

	constructor(private fb: FormBuilder, private asyncValidatorFinhubKeyValidity: AsyncValidatorFinhubKeyValidity, private cd: ChangeDetectorRef) {}

	get finnhubKey(): AbstractControl {
		return this.form.get('finnhubKey') as AbstractControl;
	}

	get nickName(): AbstractControl {
		return this.form.get('nickName') as AbstractControl;
	}

	get photoURL(): AbstractControl {
		return this.form.get('photoURL') as AbstractControl;
	}

	ngOnInit() {
		this.initForm();
		this.finhubValidity$ = this.finnhubKey.statusChanges.pipe(map((status) => (this.finnhubKey.disabled ? 'VALID' : status)));

		this.finhubValidity$.subscribe(console.log);
	}

	ngOnChanges(changes: SimpleChanges) {
		console.log('changes', changes);
		if (changes.user && changes.user.previousValue) {
			const currentUser = changes.user?.currentValue as StUserPublicData;
			this.nickName.patchValue(currentUser?.nickName);
		}
	}

	async submit() {
		this.form.markAsDirty();
		this.form.markAllAsTouched();

		if (!this.form.invalid) {
			this.submitClickedEmitter.emit(convertUserAccountFormToStUserEditDataInput(this.user.id, this.form.getRawValue()));
			this.cancel();
		}
	}

	onEditForm(): void {
		this.isFinnhubKeyEdited = !this.isFinnhubKeyEdited;
		if (this.isFinnhubKeyEdited) {
			this.finnhubKey.enable();
		} else {
			this.finnhubKey.disable();
		}
	}

	uploadedImage(files: UploadedFile[]) {
		this.photoURL.patchValue(files[0].downloadURL);
		this.isUserPhotoEdited = true;
	}

	onImageCancel(): void {
		this.photoURL.patchValue(this.user.photoURL);
		this.isUserPhotoEdited = false;
	}

	cancel() {
		this.uploader.clearImages();
		this.photoURL.disable();
		this.formWrappers.forEach((form) => form.resetForm(true));
		this.isUserPhotoEdited = false;
		this.isFinnhubKeyEdited = false;
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
			photoURL: [{ value: this.user.photoURL, disabled: true }, [requiredValidator]],
		});
	}
}
