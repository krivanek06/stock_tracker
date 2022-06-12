import { AccountOverviewDialogComponent } from '@account-feature';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { GraphqlQueryService, StUserIdentificationPortfolioFragmentFragment, StUserPublicData, UserStorageService } from '@core';
import { HallOfFameBase, HallOfFameUserSubPages } from '@hall-of-fame';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-hall-of-fame-users',
	templateUrl: './hall-of-fame-users.component.html',
	styleUrls: ['./hall-of-fame-users.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameUsersComponent extends HallOfFameBase implements OnInit {
	HallOfFameUserSubPages = HallOfFameUserSubPages;
	userPublicData$!: Observable<StUserPublicData>;

	subsectionName: string = 'Best Users';

	constructor(
		graphqlQueryService: GraphqlQueryService,
		private userStorageService: UserStorageService,
		private router: Router,
		private dialog: MatDialog
	) {
		super(graphqlQueryService);
	}

	ngOnInit(): void {
		super.ngOnInit();
		this.userPublicData$ = this.userStorageService.getUser();
	}

	segmentChanged(data: any) {
		const value = data.detail.value;
		this.subsectionName = HallOfFameUserSubPages.find((p) => p.value === value)?.name as string;
		this.router.navigateByUrl(`menu/hall-of-fame/users/${value}`);
	}

	showUser(userIdentification: StUserIdentificationPortfolioFragmentFragment) {
		this.dialog.open(AccountOverviewDialogComponent, {
			data: { userIdentification },
			panelClass: 'g-mat-dialog-big',
		});
	}
}
