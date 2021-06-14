import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GroupFeatureFacadeService} from '@group-feature';

@Component({
    selector: 'app-groups-overview',
    templateUrl: './groups-overview.component.html',
    styleUrls: ['./groups-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupsOverviewComponent implements OnInit {

    constructor(private groupFeatureFacadeService: GroupFeatureFacadeService) {
    }

    ngOnInit() {
    }

    createGroup() {
        this.groupFeatureFacadeService.createGroup();
    }

}
