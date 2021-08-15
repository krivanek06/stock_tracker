import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StGroupAllData, StUserPublicData, UserStorageService } from '@core';
import { GroupFeatureFacadeService } from '@group-feature';
import { Confirmable } from '@shared';
import { Observable } from 'rxjs';
import { GROUPS_PAGES } from './../../model';

@Component({
	selector: 'app-groups-overview',
	templateUrl: './groups-overview.component.html',
	styleUrls: ['./groups-overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsOverviewComponent implements OnInit {
	user$: Observable<StUserPublicData>;

	constructor(private groupFeatureFacadeService: GroupFeatureFacadeService, private userStorageService: UserStorageService, private router: Router) {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUser();
	}

	createGroup() {
		this.groupFeatureFacadeService.createGroup();
	}

	@Confirmable('Please confirm your decision', 'Cancel', 'Confirm')
	answerReceivedGroupInvitation(group: StGroupAllData, answer: boolean) {
		this.groupFeatureFacadeService.answerReceivedGroupInvitation(group, answer);
	}

	visitGroup({ id }: StGroupAllData) {
		this.router.navigate([`/menu/groups/${GROUPS_PAGES.DETAILS}/${id}`]);
	}
}
