import { AccountOverviewDialogComponent } from '@account-feature';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import {
	GraphqlQueryService,
	StGroupIdentificationDataFragment,
	StHallOfFameGroupsFragment,
	StHallOfFameUsersFragment,
	StUserIdentificationPortfolioFragmentFragment,
	StUserPublicData,
	UserStorageService,
} from '@core';
import { map, Observable } from 'rxjs';
@Component({
	selector: 'app-hall-of-fame',
	templateUrl: './hall-of-fame.page.html',
	styleUrls: ['./hall-of-fame.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFamePage implements OnInit {
	userPublicData$!: Observable<StUserPublicData>;
	hallOfFameUser$!: Observable<StHallOfFameUsersFragment>;
	hallOfFameGroups$!: Observable<StHallOfFameGroupsFragment>;

	constructor(
		private userStorageService: UserStorageService,
		private dialog: MatDialog,
		private graphqlQueryService: GraphqlQueryService,
		private router: Router
	) {}

	ngOnInit(): void {
		this.hallOfFameUser$ = this.graphqlQueryService.queryHallOfFame().pipe(map((res) => res.users));
		this.hallOfFameGroups$ = this.graphqlQueryService.queryHallOfFame().pipe(map((res) => res.groups));
		this.userPublicData$ = this.userStorageService.getUser();
	}

	showUser(userIdentification: StUserIdentificationPortfolioFragmentFragment) {
		this.dialog.open(AccountOverviewDialogComponent, {
			data: { userIdentification },
			panelClass: 'g-mat-dialog-big',
		});
	}

	visitGroup({ id }: StGroupIdentificationDataFragment): void {
		console.log('visit', id);
		this.router.navigateByUrl(`menu/groups/${id}`);
	}
}
