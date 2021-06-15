import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GroupFeatureFacadeService} from '@group-feature';
import {StUserPublicData, UserStorageService} from '@core';
import {Observable} from 'rxjs';
import {groupTestData} from '../../model/groups.testdata';

@Component({
    selector: 'app-groups-overview',
    templateUrl: './groups-overview.component.html',
    styleUrls: ['./groups-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsOverviewComponent implements OnInit {
    user$: Observable<StUserPublicData>;

    groupTestData = groupTestData;

    constructor(private groupFeatureFacadeService: GroupFeatureFacadeService,
                private userStorageService: UserStorageService) {
    }

    ngOnInit() {
        this.user$ = this.userStorageService.getUser();
    }

    createGroup() {
        this.groupFeatureFacadeService.createGroup();
    }


}
