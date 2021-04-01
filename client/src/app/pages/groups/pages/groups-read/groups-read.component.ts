import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {filter, switchMap, takeUntil} from 'rxjs/operators';
import {convertStGroupAllDataToStGroupPartialData, GroupFeatureFacadeService} from '@group-feature';
import {ComponentBaseDirective, GroupStorageService, StGroupAllData} from '@core';

@Component({
    selector: 'app-groups-read',
    templateUrl: './groups-read.component.html',
    styleUrls: ['./groups-read.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsReadComponent extends ComponentBaseDirective implements OnInit, OnDestroy {
    queriedGroup: StGroupAllData;
    isUserOwner: boolean;
    isUserManager: boolean;
    isUserMember: boolean;
    isUserInvited: boolean;
    isUserInvitationReceived: boolean;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private groupUserRolesService: GroupStorageService,
                private groupService: GroupFeatureFacadeService,
                private cd: ChangeDetectorRef) {
        super();
    }

    ngOnInit() {
        this.initGroup();
    }

    ngOnDestroy() {
        super.ngOnDestroy();
        this.groupUserRolesService.activeGroup = null;
    }

    editGroup(queriedGroup: StGroupAllData) {
        this.router.navigate([`menu/groups/edit/${queriedGroup.groupId}`]);
    }

    async answerReceivedGroupInvitation(queriedGroup: StGroupAllData, decision: boolean) {
        const groupPartialData = convertStGroupAllDataToStGroupPartialData(queriedGroup);
        if (await this.groupService.answerReceivedGroupInvitation(groupPartialData, decision)) {
            this.initGroup();
        }
    }

    async toggleInvitationRequestToGroup(queriedGroup: StGroupAllData) {
        const groupPartialData = convertStGroupAllDataToStGroupPartialData(queriedGroup);
        if (await this.groupService.toggleInvitationRequestToGroup(groupPartialData)) {
            this.initGroup();
        }
    }

    async leaveGroup(queriedGroup: StGroupAllData) {
        const groupPartialData = convertStGroupAllDataToStGroupPartialData(queriedGroup);
        if (await this.groupService.leaveGroup(groupPartialData)) {
            this.initGroup();
        }
    }

    private initGroup() {
        this.activatedRoute.params.pipe(
            filter(x => x.id),
            switchMap(x => this.groupService.querySTGroupAllDataByGroupId(x.id)),
            takeUntil(this.destroy$)
        ).subscribe(res => {
            this.groupUserRolesService.activeGroup = res;
            this.queriedGroup = res;
            this.isUserOwner = this.groupUserRolesService.isUserOwner();
            this.isUserMember = this.groupUserRolesService.isUserMember();
            this.isUserManager = this.groupUserRolesService.isUserManager();
            this.isUserInvited = this.groupUserRolesService.isUserInvited();
            this.isUserInvitationReceived = this.groupUserRolesService.isUserInvitationReceived();
            this.cd.detectChanges();
        });
    }
}
