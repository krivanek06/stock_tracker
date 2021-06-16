import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {GroupStorageService} from '@core';
import {GROUPS_PAGES, GROUPS_PAGES_DETAILS_PATH} from '../../model/groups.model';
import {Router} from '@angular/router';
import {groupTestData} from '../../model/groups.testdata';

@Component({
    selector: 'app-group-details',
    templateUrl: './group-details.component.html',
    styleUrls: ['./group-details.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDetailsComponent implements OnInit {

    GROUPS_PAGES_DETAILS_PATH = GROUPS_PAGES_DETAILS_PATH;
    groupTestData = groupTestData;

    constructor(private groupStorageService: GroupStorageService,
                private router: Router) {
    }

    ngOnInit() {
        this.groupStorageService.getActiveGroup().subscribe(res => {
            console.log('active group is', res);
        });
    }

    changeDetailsPage(segment: string) {
        const groupId = groupTestData.groupId; // this.groupStorageService.activeGroup.groupId;
        this.router.navigate([`/menu/groups/${GROUPS_PAGES.DETAILS}/${groupId}/${segment}`]);
    }
}
