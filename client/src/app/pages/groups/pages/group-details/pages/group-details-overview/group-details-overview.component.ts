import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {groupTestData} from '../../../../model/groups.testdata';
import {GroupStorageService, StUserPublicData, UserStorageService} from '@core';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-group-details-overview',
    templateUrl: './group-details-overview.component.html',
    styleUrls: ['./group-details-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDetailsOverviewComponent implements OnInit {
    user$: Observable<StUserPublicData>;

    groupTestData = groupTestData;

    constructor(private groupStorageService: GroupStorageService,
                private userStorageService: UserStorageService) {
    }

    ngOnInit() {
        this.user$ = this.userStorageService.getUser();
        this.groupStorageService.getActiveGroup().subscribe(res => {
            console.log('active group is', res);
        });

    }

}
