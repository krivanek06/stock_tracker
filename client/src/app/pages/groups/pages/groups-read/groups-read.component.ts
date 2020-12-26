import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComponentBase} from '../../../../shared/utils/component-base/component.base';
import {filter, map, shareReplay, switchMap, takeUntil} from 'rxjs/operators';
import {GroupService} from '../../../../features/group-feature/services/group.service';
import {Observable} from 'rxjs';
import {StGroupAllData} from '../../../../api/customGraphql.service';
import {AuthFeatureService} from '../../../../features/auth-feature/services/auth-feature.service';

@Component({
    selector: 'app-groups-read',
    templateUrl: './groups-read.component.html',
    styleUrls: ['./groups-read.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsReadComponent extends ComponentBase implements OnInit {
    queriedGroup$: Observable<StGroupAllData>;
    canEdit$: Observable<boolean>;
    isUserInvited$: Observable<boolean>;
    canUserSentInvitation$: Observable<boolean>;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private authService: AuthFeatureService,
                private groupService: GroupService) {
        super();
    }

    ngOnInit() {
        this.initGroup();
        this.checkIfCanEdit();
        this.checkIfUserIsInvited();
        this.checkIfUserSendInvitation();
    }

    editGroup(queriedGroup: StGroupAllData) {
        this.router.navigate([`menu/groups/edit/${queriedGroup.groupId}`]);
    }

    submitInvitation(decision: boolean) {

    }

    declineInvitation() {

    }

    private checkIfCanEdit() {
        const userId = this.authService.user.uid;
        this.canEdit$ = this.queriedGroup$.pipe(
            map(group => group.owner.user.uid === userId || group.managers.map(m => m.user.uid).includes(userId))
        );
    }

    private checkIfUserSendInvitation() {
        const userId = this.authService.user.uid;
        this.canUserSentInvitation$ = this.queriedGroup$.pipe(
            map(group => group.invitationReceived.map(m => m.user.uid).includes(userId))
        );
    }

    private checkIfUserIsInvited() {
        const userId = this.authService.user.uid;
        this.isUserInvited$ = this.queriedGroup$.pipe(
            map(group => group.invitationSent.map(m => m.user.uid).includes(userId))
        );
    }

    private initGroup() {
        this.queriedGroup$ = this.activatedRoute.params.pipe(
            filter(x => x.id),
            switchMap(x => this.groupService.querySTGroupAllDataByGroupId(x.id)),
            shareReplay()
        );
    }



}
