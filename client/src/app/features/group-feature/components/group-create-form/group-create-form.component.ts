import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDatepicker } from '@angular/material/datepicker';
import { StGroupAllData, StGroupAllDataInput, StUserIndentificationDataFragment, StUserIndetification } from '@core';
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

	@Input() user!: StUserIndetification;
	@Input() editedGroup!: StGroupAllData;

	@ViewChild('uploader') uploader!: UploaderComponent;
	@ViewChild('endDatePicker') endDatePicker!: MatDatepicker<Date>;

	invitationSent: StUserIndentificationDataFragment[] = [];
	form!: FormGroup;
	showError = false;
	dateStartError = false;
	dateEndError = false;

	constructor(private fb: FormBuilder) {}

	get isInfinite(): AbstractControl {
		return this.form.get('isInfinite') as AbstractControl;
	}

	get startDate(): AbstractControl {
		return this.form.get('startDate') as AbstractControl;
	}

	get endDate(): AbstractControl {
		return this.form.get('endDate') as AbstractControl;
	}

	get isOwnerAlsoMember(): AbstractControl {
		return this.form.get('isOwnerAlsoMember') as AbstractControl;
	}
	get isPrivate(): AbstractControl {
		return this.form.get('isPrivate') as AbstractControl;
	}

	get imagePath(): AbstractControl {
		return this.form.get('imagePath') as AbstractControl;
	}

	get imageUrl(): AbstractControl {
		return this.form.get('imageUrl') as AbstractControl;
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
		this.imagePath.patchValue(files[0].path);
		this.imageUrl.patchValue(files[0].downloadURL);
	}

	sendInvitation(userPublicData: StUserIndentificationDataFragment) {
		if (this.user.id === userPublicData.id) {
			DialogService.showNotificationBar(
				'You cannot invite yourself into the group. If you want to be part of the group, please check "Add me as member" '
			);
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
		let isOwnerAlsoMember = false;
		console.log('[this.editedGroup', this.editedGroup);
		if (this.editedGroup) {
			isOwnerAlsoMember = !!this.editedGroup.groupMemberData.members.find((m) => m.id === this.editedGroup.owner.id);
		}

		this.form = this.fb.group({
			name: [this.editedGroup?.name, [Validators.required]],
			description: [this.editedGroup?.description],
			imagePath: [this.editedGroup?.imagePath],
			imageUrl: [this.editedGroup?.imageUrl],
			startDate: [this.editedGroup?.startDate, [Validators.required]],
			endDate: [this.editedGroup?.endDate, this.editedGroup?.isInfinite ? [] : [Validators.required]],
			isInfinite: [this.editedGroup?.isInfinite || false],
			isPrivate: [this.editedGroup?.isPrivate || false],
			isOwnerAlsoMember: [isOwnerAlsoMember],
		});
	}

	private watchForm() {
		this.watchInfinityChange();
		this.watchDateStart();
		this.watchDateEnd();
		this.watchOwnerMemberWhenEditing();
		this.watchIsPrivateWhenEditing();
		this.form.valueChanges.subscribe(() => (this.showError = false));
	}

	private watchIsPrivateWhenEditing(): void {
		if (!this.editedGroup) {
			return;
		}
		this.isPrivate.valueChanges.subscribe((res) => {
			if (res) {
				DialogService.showNotificationBar(
					'After saving this form group will became private, so no one can request joining, group will became invite only'
				);
			} else {
				DialogService.showNotificationBar('After saving this form group will became public, anyone can reuqest joining this group');
			}
		});
	}

	private watchOwnerMemberWhenEditing(): void {
		if (!this.editedGroup) {
			return;
		}
		this.isOwnerAlsoMember.valueChanges.subscribe((isMember) => {
			if (isMember) {
				DialogService.showNotificationBar(`After saving this form, group owner: ${this.editedGroup.owner.nickName} will be member of this group`);
			} else {
				DialogService.showNotificationBar(`After saving this form, group owner: ${this.editedGroup.owner.nickName} will be removed from this group`);
			}
		});
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
			this.dateStartError = today.isAfter(moment(res)) && !today.isSame(moment(res), 'days');
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
