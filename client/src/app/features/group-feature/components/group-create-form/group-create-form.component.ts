import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { StGroupAllDataInput, StUserIndentificationDataFragment, StUserIndetification } from '@core';
import { DialogService, UploadedFile, UploaderComponent } from '@shared';
import * as moment from 'moment';
import { combineLatest } from 'rxjs';
import { createSTGroupAllDataInput } from '../../utils';

@Component({
	selector: 'app-group-create-form',
	templateUrl: './group-create-form.component.html',
	styleUrls: ['./group-create-form.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupCreateFormComponent implements OnInit {
	@Output() createGroupEmitter: EventEmitter<StGroupAllDataInput> = new EventEmitter<StGroupAllDataInput>();

	@Input() user: StUserIndetification;

	@ViewChild('uploader') uploader: UploaderComponent;
	@ViewChild('endDatePicker') endDatePicker: MatDatepicker<Date>;

	invitationSent: StUserIndentificationDataFragment[] = [];
	form: FormGroup;
	showError = false;
	dateStartError = false;
	dateEndError = false;

	constructor(private fb: FormBuilder) {}

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
		if (this.user.id === userPublicData.id) {
			DialogService.presentToast('You cannot invite yourself into the group. If you want to be part of the group, please check "Add me as member" ');
			return;
		}
		if (!this.invitationSent.map((user) => user.id).includes(userPublicData.id)) {
			this.invitationSent = [...this.invitationSent, userPublicData];
		}
	}

	invitationRemove(userPublicData: StUserIndentificationDataFragment) {
		this.invitationSent = this.invitationSent.filter((x) => x.id !== userPublicData.id);
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
			isOwnerAlsoMember: [false],
		});
	}

	private watchForm() {
		this.watchInfinityChange();
		this.watchDateStart();
		this.watchDateEnd();
		this.form.valueChanges.subscribe(() => (this.showError = false));
	}

	private watchDateEnd() {
		const today: moment.Moment = moment();
		combineLatest([this.startDate.valueChanges, this.endDate.valueChanges]).subscribe(([start, end]) => {
			if (this.startDate.value) {
				const startMoment = moment(start);
				const endMoment = moment(end);
				this.dateEndError = endMoment.isBefore(startMoment) || endMoment.isBefore(startMoment);
			}
		});
	}

	private watchDateStart() {
		const today: moment.Moment = moment();
		this.startDate.valueChanges.subscribe((res) => {
			this.dateStartError = today.isAfter(moment(res));
		});
	}

	private watchInfinityChange() {
		this.isInfinite.valueChanges.subscribe((res) => {
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
