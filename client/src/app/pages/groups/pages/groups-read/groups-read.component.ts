import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComponentBaseDirective} from '../../../../shared/utils/component-base/component-base.directive';
import {filter, switchMap, takeUntil} from 'rxjs/operators';
import {GroupService} from '../../../../features/group-feature/services/group.service';
import {StGroupAllData} from '../../../../api/customGraphql.service';
import {convertStGroupAllDataToStGroupPartialData} from '../../../../features/group-feature/utils/convertor';
import {GroupUserRolesService} from '../../../../features/group-feature/services/group-user-roles.service';

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
                private groupUserRolesService: GroupUserRolesService,
                private groupService: GroupService,
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
