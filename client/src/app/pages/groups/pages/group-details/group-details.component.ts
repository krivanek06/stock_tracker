import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupStorageService, StGroupAllData } from '@core';
import { GroupFeatureFacadeService } from '@group-feature';
import { ConfirmableWithCheckbox } from '@shared';
import { Observable } from 'rxjs';
import { GROUPS_PAGES_DETAILS_PATH } from '../../model/groups.model';
import { GROUPS_PAGES } from './../../model/groups.model';

@Component({
	selector: 'app-group-details',
	templateUrl: './group-details.component.html',
	styleUrls: ['./group-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsComponent implements OnInit, OnDestroy {
	GROUPS_PAGES_DETAILS_PATH = GROUPS_PAGES_DETAILS_PATH;
	groupData$: Observable<StGroupAllData>;
	isOwner$: Observable<boolean>;
	isMember$: Observable<boolean>;
	isUserInvited$: Observable<boolean>;
	canUserSendInvitation$: Observable<boolean>;
	hasUserAlreadySentInvitaitonIntoGroup$: Observable<boolean>;

	constructor(
		private groupStorageService: GroupStorageService,
		private router: Router,
		private route: ActivatedRoute,
		private groupFeatureFacadeService: GroupFeatureFacadeService
	) {}
	ngOnDestroy(): void {
		this.groupStorageService.setActiveGroupId(null);
	}

	ngOnInit() {
		this.groupData$ = this.groupStorageService.getActiveGroup();
		this.isOwner$ = this.groupStorageService.isUserOwnerObs();
		this.isMember$ = this.groupStorageService.isUserMemberObs();
		this.isUserInvited$ = this.groupStorageService.isUserInvitedObs();
		this.canUserSendInvitation$ = this.groupStorageService.canUserSendInvitationObs();
		this.hasUserAlreadySentInvitaitonIntoGroup$ = this.groupStorageService.hasUserAlreadySentInvitaitonIntoGroup();
	}

	changeDetailsPage(segment: string) {
		const groupId = this.route.snapshot.paramMap.get('groupId');
		this.router.navigateByUrl(`/menu/groups/${GROUPS_PAGES.DETAILS}/${groupId}/${segment}`);
	}

	@ConfirmableWithCheckbox('Please confirm leaving group. You will be removed from group statistics', 'Confirm')
	leaveGroup() {
		this.groupFeatureFacadeService.leaveGroup();
	}

	editGroup(groupData: StGroupAllData) {
		this.groupFeatureFacadeService.createGroup(groupData);
	}

	@ConfirmableWithCheckbox('Please confirm deleting group. Note that this action is irreversible', 'Confirm')
	async deleteGroup() {
		if (await this.groupFeatureFacadeService.deleteGroup()) {
			this.router.navigateByUrl(`/menu/groups`);
		}
	}

	@ConfirmableWithCheckbox('Please confirm sending a request to join the group', 'Confirm')
	async sendInvitation() {
		this.groupFeatureFacadeService.toggleInvitationRequestToGroup(this.groupStorageService.activeGroup, true);
	}

	@ConfirmableWithCheckbox('Please confirm declining your request to joining the group', 'Confirm')
	async removeInvitation() {
		this.groupFeatureFacadeService.toggleInvitationRequestToGroup(this.groupStorageService.activeGroup, false);
	}

	@ConfirmableWithCheckbox('Please confirm your decision to join the group', 'Confirm')
	async acceptInvitation() {
		this.groupFeatureFacadeService.answerReceivedGroupInvitation(this.groupStorageService.activeGroup, true);
	}

	@ConfirmableWithCheckbox('Please confirm your decision to decline invitation for joining the group', 'Confirm')
	async declineInvitation() {
		this.groupFeatureFacadeService.answerReceivedGroupInvitation(this.groupStorageService.activeGroup, false);
	}
}
