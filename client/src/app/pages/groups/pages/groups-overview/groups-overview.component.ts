import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StGroupAllData, StUserPublicData, UserStorageService } from '@core';
import { GroupFeatureFacadeService } from '@group-feature';
import { Confirmable } from '@shared';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-groups-overview',
	templateUrl: './groups-overview.component.html',
	styleUrls: ['./groups-overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsOverviewComponent implements OnInit {
	user$!: Observable<StUserPublicData>;
	hasRoleCreateGroup$!: Observable<boolean>;

	constructor(private groupFeatureFacadeService: GroupFeatureFacadeService, private userStorageService: UserStorageService, private router: Router) {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUser();
		this.hasRoleCreateGroup$ = this.userStorageService.hasRoleCreateGroup();
	}

	createGroup() {
		this.groupFeatureFacadeService.createGroup();
	}

	@Confirmable('Please confirm your decision about joining a group')
	acceptInvitation(group: StGroupAllData) {
		this.groupFeatureFacadeService.answerReceivedGroupInvitation(group, true);
	}

	@Confirmable('Please confirm your decision about declining group invitation')
	declineInvitation(group: StGroupAllData) {
		this.groupFeatureFacadeService.answerReceivedGroupInvitation(group, false);
	}

	visitGroup(groupAllData: StGroupAllData) {
		this.router.navigateByUrl(`/menu/groups/${groupAllData.id}`);
	}
}
