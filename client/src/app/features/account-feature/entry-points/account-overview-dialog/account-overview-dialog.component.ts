import { ChangeDetectionStrategy, Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GraphqlUserService, StUserIdentificationDataFragment, StUserPublicDataSearchFragment } from '@core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-account-overview-dialog',
	templateUrl: './account-overview-dialog.component.html',
	styleUrls: ['./account-overview-dialog.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AccountOverviewDialogComponent implements OnInit {
	searchedUser$!: Observable<StUserPublicDataSearchFragment>;

	constructor(
		private dialogRef: MatDialogRef<AccountOverviewDialogComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { userIdentification: StUserIdentificationDataFragment },
		private graphqlUserService: GraphqlUserService
	) {}

	ngOnInit(): void {
		this.searchedUser$ = this.graphqlUserService.queryStUserPublicDataSearch(this.data.userIdentification.id);
	}

	dismissModal() {
		this.dialogRef.close();
	}
}
