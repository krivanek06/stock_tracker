import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {groupTestData} from '../../../../model/groups.testdata';
import {GroupStorageService} from '@core';
import {ChartType} from '@shared';

@Component({
    selector: 'app-group-details-stats',
    templateUrl: './group-details-stats.component.html',
    styleUrls: ['./group-details-stats.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDetailsStatsComponent implements OnInit {
    groupTestData = groupTestData;
    ChartType = ChartType;

    constructor(private groupStorageService: GroupStorageService) {
    }

    ngOnInit() {
    }

}
