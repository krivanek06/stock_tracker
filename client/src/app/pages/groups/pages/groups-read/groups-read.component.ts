import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ComponentBase} from '../../../../shared/utils/component-base/component.base';
import {filter, map, switchMap, takeUntil} from 'rxjs/operators';
import {GroupService} from '../../../../features/group-feature/services/group.service';
import {Observable} from 'rxjs';
import {StGroupAllData} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-groups-read',
    templateUrl: './groups-read.component.html',
    styleUrls: ['./groups-read.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsReadComponent extends ComponentBase implements OnInit {
    queriedGroup$: Observable<StGroupAllData>;

    constructor(private activatedRoute: ActivatedRoute,
                private router: Router,
                private groupService: GroupService) {
        super();
    }

    ngOnInit() {
        this.initGroup();
    }

    editGroup(queriedGroup: StGroupAllData) {
        this.router.navigate([`menu/groups/edit/${queriedGroup.groupId}`])
    }

    private initGroup() {
        this.queriedGroup$ = this.activatedRoute.params.pipe(
            filter(x => x.id),
            switchMap(x => this.groupService.querySTGroupAllDataByGroupId(x.id))
        );
    }
}
