import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StGroupAllData, StUserPublicData, UserStorageService } from '@core';
import { GroupFeatureFacadeService } from '@group-feature';
import { ConfirmableWithCheckbox } from '@shared';
import { Observable } from 'rxjs';
import { GROUPS_PAGES } from './../../model/groups.model';

@Component({
	selector: 'app-groups-overview',
	templateUrl: './groups-overview.component.html',
	styleUrls: ['./groups-overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsOverviewComponent implements OnInit {
	user$: Observable<StUserPublicData>;

	constructor(
		private groupFeatureFacadeService: GroupFeatureFacadeService,
		private userStorageService: UserStorageService,
		private router: Router,
		private route: ActivatedRoute
	) {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUser();
	}

	createGroup() {
		this.groupFeatureFacadeService.createGroup();
	}

	@ConfirmableWithCheckbox('Please confirm your decision about joining a group', 'Confirm')
	acceptInvitation(group: StGroupAllData) {
		this.groupFeatureFacadeService.answerReceivedGroupInvitation(group, true);
	}

	@ConfirmableWithCheckbox('Please confirm your decision about declining group invitation', 'Confirm')
	declineInvitation(group: StGroupAllData) {
		this.groupFeatureFacadeService.answerReceivedGroupInvitation(group, false);
	}

	visitGroup({ id }: StGroupAllData) {
		this.router.navigate([`/menu/groups/${GROUPS_PAGES.DETAILS}/${id}`]);
	}
}
