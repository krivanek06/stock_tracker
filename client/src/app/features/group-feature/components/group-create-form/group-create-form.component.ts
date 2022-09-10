import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { StGroupAllData, StGroupAllDataInput, StUserIdentification, StUserIdentificationDataFragment } from '@core';
import {
	DialogService,
	InputTypeDateTimePickerConfig,
	maxLengthValidator,
	minLengthValidator,
	MomentService,
	requiredValidator,
	UploadedFile,
	UploaderComponent,
} from '@shared';
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

	@Input() user: StUserIdentification | null = null;
	@Input() editedGroup!: StGroupAllData;

	@ViewChild('uploader') uploader!: UploaderComponent;

	invitationSent: StUserIdentificationDataFragment[] = [];
	form!: FormGroup;
	showError = false;
	dateStartError = false;
	dateEndError = false;

	inputTypeDateTimePickerConfig: InputTypeDateTimePickerConfig = {
		minDate: new Date(),
	};

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

	sendInvitation(userPublicData: StUserIdentificationDataFragment) {
		if (!MomentService.isMoreThan(userPublicData.lastSignInDate, 14)) {
			DialogService.showNotificationBar(`User ${userPublicData.nickName} has not been active for more than 14 days, cannot be invited`, 'error');
			return;
		}
		if (this.user && this.user.id === userPublicData.id) {
			DialogService.showNotificationBar(
				'You cannot invite yourself into the group. If you want to be part of the group, please check "Add me as member" ',
				'error'
			);
			return;
		}
		if (!this.invitationSent.map((user) => user.id).includes(userPublicData.id)) {
			this.invitationSent = [...this.invitationSent, userPublicData];
		}
	}

	invitationRemove(userPublicData: StUserIdentificationDataFragment) {
		this.invitationSent = this.invitationSent.filter((x) => x.id !== userPublicData.id);
	}

	private initForm() {
		let isOwnerAlsoMember = false;
		console.log('[this.editedGroup', this.editedGroup);
		if (this.editedGroup) {
			isOwnerAlsoMember = !!this.editedGroup.groupMemberData.members.find((m) => m.id === this.editedGroup.owner.id);
		}

		this.form = this.fb.group({
			name: [this.editedGroup?.name, [requiredValidator, minLengthValidator(6), maxLengthValidator(20)]],
			description: [this.editedGroup?.description],
			imagePath: [this.editedGroup?.imagePath],
			imageUrl: [this.editedGroup?.imageUrl],
			startDate: [this.editedGroup?.startDate, [requiredValidator]],
			endDate: [this.editedGroup?.endDate, this.editedGroup?.isInfinite ? [] : [requiredValidator]],
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
					'After saving this form group will became private, so no one can request joining, group will became invite only',
					'notification'
				);
			} else {
				DialogService.showNotificationBar('After saving this form group will became public, anyone can request joining this group', 'notification');
			}
		});
	}

	private watchOwnerMemberWhenEditing(): void {
		if (!this.editedGroup) {
			return;
		}
		this.isOwnerAlsoMember.valueChanges.subscribe((isMember) => {
			if (isMember) {
				DialogService.showNotificationBar(
					`After saving this form, group owner: ${this.editedGroup.owner.nickName} will be member of this group`,
					'notification'
				);
			} else {
				DialogService.showNotificationBar(
					`After saving this form, group owner: ${this.editedGroup.owner.nickName} will be removed from this group`,
					'notification'
				);
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
				this.endDate.setValidators([requiredValidator]);
			} else {
				this.endDate.patchValue(null);
				this.endDate.clearValidators();
			}
			this.endDate.updateValueAndValidity();
		});
	}
}
