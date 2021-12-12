import { ChangeDetectionStrategy, Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GroupStorageService, StGroupAllData } from '@core';
import { GroupFeatureFacadeService } from '@group-feature';
import { Confirmable, DialogService } from '@shared';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';
import { GROUPS_PAGES_DETAILS, GROUPS_PAGES_DETAILS_PATH } from '../../model';

@Component({
	selector: 'app-group-details',
	templateUrl: './group-details.component.html',
	styleUrls: ['./group-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsComponent implements OnInit, OnDestroy {
	GROUPS_PAGES_DETAILS_PATH = GROUPS_PAGES_DETAILS_PATH;
	GROUPS_PAGES_DETAILS = GROUPS_PAGES_DETAILS;
	// segmentValue = GROUPS_PAGES_DETAILS_PATH[0].value;

	groupData$!: Observable<StGroupAllData | null>;
	isOwner$!: Observable<boolean>;
	isMember$!: Observable<boolean>;
	isUserInvited$!: Observable<boolean>;
	canUserSendInvitation$!: Observable<boolean>;
	hasUserAlreadySentInvitaitonIntoGroup$!: Observable<boolean>;

	constructor(
		private groupStorageService: GroupStorageService,
		private groupFeatureFacadeService: GroupFeatureFacadeService,
		private route: ActivatedRoute,
		private router: Router
	) {}
	ngOnDestroy(): void {
		this.groupStorageService.setActiveGroupId(null);
	}

	ngOnInit() {
		this.groupStorageService.setActiveGroupId(this.route.snapshot.params.groupId);
		this.groupData$ = this.groupStorageService.getActiveGroup();
		this.isOwner$ = this.groupStorageService.isUserOwnerObs();
		this.isMember$ = this.groupStorageService.isUserMemberObs();
		this.isUserInvited$ = this.groupStorageService.isUserInvitedObs();
		this.canUserSendInvitation$ = this.groupStorageService.canUserSendInvitationObs();
		this.hasUserAlreadySentInvitaitonIntoGroup$ = this.groupStorageService.hasUserAlreadySentInvitaitonIntoGroup();
	}

	changeDetailsPage(event: any) {
		const segment = event.detail.value;
		this.router.navigateByUrl(`menu/groups/${this.groupStorageService.activeGroupId}/${segment}`);
	}

	@Confirmable('Please confirm leaving group. You will be removed from group statistics', 'Confirm')
	leaveGroup() {
		this.groupFeatureFacadeService.leaveGroup();
	}

	editGroup(groupData: StGroupAllData) {
		this.groupFeatureFacadeService.createGroup(groupData);
	}

	reloadGroup() {
		this.groupStorageService.setActiveGroupId(this.groupStorageService.activeGroup.id);
		this.groupData$.pipe(first((x) => !!x)).subscribe((group) => DialogService.showNotificationBar(`Group ${group?.name} has been refreshed`));
	}

	@Confirmable('Please confirm deleting group. Note that this action is irreversible')
	async deleteGroup() {
		if (await this.groupFeatureFacadeService.deleteGroup()) {
			this.groupStorageService.setActiveGroupId(null);
		}
	}

	@Confirmable('Please confirm sending a request to join the group')
	async sendInvitation() {
		this.groupFeatureFacadeService.toggleInvitationRequestToGroup(this.groupStorageService.activeGroup, true);
	}

	@Confirmable('Please confirm declining your request to joining the group')
	async removeInvitation() {
		this.groupFeatureFacadeService.toggleInvitationRequestToGroup(this.groupStorageService.activeGroup, false);
	}

	@Confirmable('Please confirm your decision to join the group')
	async acceptInvitation() {
		this.groupFeatureFacadeService.answerReceivedGroupInvitation(this.groupStorageService.activeGroup, true);
	}

	@Confirmable('Please confirm your decision to decline invitation for joining the group')
	async declineInvitation() {
		this.groupFeatureFacadeService.answerReceivedGroupInvitation(this.groupStorageService.activeGroup, false);
	}
}
