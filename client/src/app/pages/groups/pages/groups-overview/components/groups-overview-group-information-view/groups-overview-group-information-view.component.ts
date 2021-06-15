import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Confirmable} from '@shared';
import {StGroupAllData} from '@core';
import {GROUPS_PAGES} from '../../../../model/groups.model';
import {GroupFeatureFacadeService} from '@group-feature';
import {Router} from '@angular/router';

@Component({
    selector: 'app-groups-overview-group-information-view',
    templateUrl: './groups-overview-group-information-view.component.html',
    styleUrls: ['./groups-overview-group-information-view.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsOverviewGroupInformationViewComponent implements OnInit {

    @Input() groupAllData: StGroupAllData;

    constructor(private groupFeatureFacadeService: GroupFeatureFacadeService,
                private router: Router) {
    }

    ngOnInit() {
    }

    @Confirmable('Please confirm your decision', 'Cancel', 'Confirm')
    answerReceivedGroupInvitation(group: StGroupAllData, answer: boolean) {
        this.groupFeatureFacadeService.answerReceivedGroupInvitation(group, answer);
    }

    visitGroup({groupId}: StGroupAllData) {
        this.router.navigate([`/menu/groups/${GROUPS_PAGES.DETAILS}/${groupId}`]);
    }

}
