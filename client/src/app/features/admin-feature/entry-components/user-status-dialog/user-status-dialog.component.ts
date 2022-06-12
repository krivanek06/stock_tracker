import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GraphqlAdminService, StUserDataAdminFragment, StUserIdentificationDataFragment } from '@core';
import { DialogService } from '@shared';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-user-status-dialog',
	templateUrl: './user-status-dialog.component.html',
	styleUrls: ['./user-status-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStatusDialogComponent implements OnInit {
	userDataAdmin$!: Observable<StUserDataAdminFragment>;

	constructor(
		private dialogRef: MatDialogRef<UserStatusDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { userIdentification: StUserIdentificationDataFragment },
		private graphqlAdminService: GraphqlAdminService
	) {}

	ngOnInit(): void {
		if (!this.data.userIdentification) {
			throw new Error('UserStatusDialogComponent missing data.userIdentification');
		}
		this.userDataAdmin$ = this.graphqlAdminService.queryStUserAdminInformationById(this.data.userIdentification.id);
	}

	closeDialog(): void {
		this.dialogRef.close();
	}

	showPortfolio(): void {}

	resetPassword(): void {}

	resetAccount(): void {}

	blockAccess(): void {}

	async addRole(role: string): Promise<void> {
		await this.graphqlAdminService.adminToggleUserRoles(this.data.userIdentification.id, role).toPromise();
		DialogService.showNotificationBar(`Role: ${role} has been added for user ${this.data.userIdentification.nickName}`);
	}

	async removeRole(role: string): Promise<void> {
		await this.graphqlAdminService.adminToggleUserRoles(this.data.userIdentification.id, role).toPromise();
		DialogService.showNotificationBar(`Role: ${role} has been removed for user ${this.data.userIdentification.nickName}`);
	}
}
