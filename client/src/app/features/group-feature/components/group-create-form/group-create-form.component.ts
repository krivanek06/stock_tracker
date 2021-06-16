import {ChangeDetectionStrategy, Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {UploadedFile, UploaderComponent} from '@shared';
import {StGroupAllDataInput, StUserIndentificationDataFragment} from '@core';
import {AbstractControl, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDatepicker} from '@angular/material/datepicker';
import {createSTGroupAllDataInput} from '../../utils';
import * as moment from 'moment';

@Component({
    selector: 'app-group-create-form',
    templateUrl: './group-create-form.component.html',
    styleUrls: ['./group-create-form.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupCreateFormComponent implements OnInit {
    @Output() createGroupEmitter: EventEmitter<StGroupAllDataInput> = new EventEmitter<StGroupAllDataInput>();

    @ViewChild('uploader') uploader: UploaderComponent;
    @ViewChild('endDatePicker') endDatePicker: MatDatepicker<Date>;

    invitationSent: StUserIndentificationDataFragment[] = [];
    form: FormGroup;
    showError = false;
    dateStartError = false;
    dateEndError = false;

    constructor(private fb: FormBuilder) {
    }

    get isInfinite(): AbstractControl {
        return this.form.get('isInfinite');
    }

    get startDate(): AbstractControl {
        return this.form.get('startDate');
    }

    get endDate(): AbstractControl {
        return this.form.get('endDate');
    }

    ngOnInit() {
        this.initForm();
        this.watchForm();
    }

    async submit() {
        this.form.markAllAsTouched();
        this.showError = this.form.invalid;
        if (!this.form.invalid) {
            const form = this.form.getRawValue();
            const result = createSTGroupAllDataInput(form, this.invitationSent);
            this.createGroupEmitter.emit(result);
        }
    }

    uploadedGroupImage(files: UploadedFile[]) {
        this.form.get('imagePath').patchValue(files[0].path);
        this.form.get('imageUrl').patchValue(files[0].downloadURL);
    }

    sendInvitation(userPublicData: StUserIndentificationDataFragment) {
        if (!this.invitationSent.map(user => user.id).includes(userPublicData.id)) {
            this.invitationSent = [...this.invitationSent, userPublicData];
        }
    }

    invitationRemove(userPublicData: StUserIndentificationDataFragment) {
        this.invitationSent = this.invitationSent.filter(x => x.id !== userPublicData.id);
    }

    endDateOpen() {
        if (!this.isInfinite.value) {
            this.endDatePicker.open();
        }
    }

    private initForm() {
        this.form = this.fb.group({
            name: [null, [Validators.required]],
            description: [null],
            imagePath: [null],
            imageUrl: [null],
            startDate: [null, [Validators.required]],
            endDate: [null, [Validators.required]],
            isInfinite: [false],
            isPrivate: [false],
            isOwnerAlsoMember: [false]
        });
    }

    private watchForm() {
        this.watchInfinityChange();
        this.watchDateStart();
        this.watchDateEnd();
        this.form.valueChanges.subscribe(() => this.showError = false);
    }

    private watchDateEnd() {
        const today: moment.Moment = moment();
        this.endDate.valueChanges.subscribe(res => {
            if (this.startDate.value) {
                const start = moment(this.startDate.value);
                const end = moment(res);
                this.dateEndError = end.isBefore(start) || end.isBefore(today);
            }
        });
    }

    private watchDateStart() {
        const today: moment.Moment = moment();
        this.startDate.valueChanges.subscribe(res => {
            this.dateStartError = today.isAfter(moment(res));
        });
    }

    private watchInfinityChange() {
        this.isInfinite.valueChanges.subscribe(res => {
            if (!res) {
                this.endDate.setValidators([Validators.required]);
            } else {
                this.endDate.patchValue(null);
                this.endDate.clearValidators();
            }
            this.endDate.updateValueAndValidity();
        });
    }

}
