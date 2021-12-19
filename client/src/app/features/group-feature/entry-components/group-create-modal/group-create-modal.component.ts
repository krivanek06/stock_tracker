import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StGroupAllData, StGroupAllDataInput, StUserIndetification, UserStorageService } from '@core';
import { Confirmable } from '@shared';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-group-create-modal',
	templateUrl: './group-create-modal.component.html',
	styleUrls: ['./group-create-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupCreateModalComponent implements OnInit {
	user$!: Observable<StUserIndetification | null>;

	constructor(
		private userStorageService: UserStorageService,
		private dialogRef: MatDialogRef<GroupCreateModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { editedGroup: StGroupAllData }
	) {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUserIdentification();
	}

	dismissModal() {
		this.dialogRef.close();
	}

	submitGroup(groupAllDataInput: StGroupAllDataInput) {
		if (this.data.editedGroup) {
			groupAllDataInput.groupId = this.data.editedGroup.id;
			this.editGroup(groupAllDataInput);
		} else {
			this.createGroup(groupAllDataInput);
		}
	}

	@Confirmable('Please confirm creating new group')
	private createGroup(groupAllDataInput: StGroupAllDataInput) {
		this.dialogRef.close({ groupAllDataInput });
	}

	@Confirmable('Please confirm editing group')
	private editGroup(groupAllDataInput: StGroupAllDataInput) {
		this.dialogRef.close({ groupAllDataInput });
	}
}
