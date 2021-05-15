import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Confirmable, UploadedFile, UploaderComponent} from '@shared';
import {StUserEditDataInput, StUserPublicData} from '@core';
import {convertUserAccountFormToStUserEditDataInput} from '../../models';


@Component({
    selector: 'app-user-account-form',
    templateUrl: './user-account-form.component.html',
    styleUrls: ['./user-account-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAccountFormComponent implements OnChanges, OnInit {
    @Output() editClickedEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Output() submitClickedEmitter: EventEmitter<StUserEditDataInput> = new EventEmitter<StUserEditDataInput>();

    @Input() user: StUserPublicData;

    @ViewChild('uploader') uploader: UploaderComponent;

    form: FormGroup;
    editing = false;

    constructor(private fb: FormBuilder) {
    }

    get displayName(): AbstractControl {
        return this.form.get('displayName');
    }

    get email(): AbstractControl {
        return this.form.get('email');
    }

    get finnhubKey(): AbstractControl {
        return this.form.get('finnhubKey');
    }

    get nickName(): AbstractControl {
        return this.form.get('nickName');
    }

    get photoURL(): AbstractControl {
        return this.form.get('photoURL');
    }

    get locale(): AbstractControl {
        return this.form.get('locale');
    }

    // needed to show user new data in form
    ngOnChanges(changes: SimpleChanges): void {
        if (changes.user && !changes.user.firstChange) {
            this.initForm();
        }
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

    edit() {
        this.editing = true;
        this.editClickedEmitter.emit(this.editing);
        this.finnhubKey.enable();
        this.nickName.enable();
        this.photoURL.enable();
    }

    cancel() {
        this.editing = false;
        this.editClickedEmitter.emit(this.editing);
        this.uploader.clearImages();
        this.finnhubKey.disable();
        this.nickName.disable();
        this.photoURL.disable();
        this.initForm();
    }

    private initForm() {
        this.form = this.fb.group({
            displayName: [{value: this.user.userPrivateData.displayName, disabled: true}, [Validators.required]],
            email: [{value: this.user.userPrivateData.email, disabled: true}, [Validators.required]],
            finnhubKey: [{value: this.user.userPrivateData.finnhubKey, disabled: true}, [Validators.required, Validators.maxLength(150)]],
            nickName: [{value: this.user.nickName, disabled: true}, [Validators.required, Validators.maxLength(50)]],
            photoURL: [{value: this.user.photoURL, disabled: true}, [Validators.required]],
            locale: [{value: this.user.locale, disabled: true}, [Validators.required]],
        });
    }


}
