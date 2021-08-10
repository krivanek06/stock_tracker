import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GroupStorageService, StGroupAllData } from '@core';
import { Observable } from 'rxjs';
import { GROUPS_PAGES, GROUPS_PAGES_DETAILS_PATH } from '../../model/groups.model';

@Component({
	selector: 'app-group-details',
	templateUrl: './group-details.component.html',
	styleUrls: ['./group-details.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsComponent implements OnInit {
	GROUPS_PAGES_DETAILS_PATH = GROUPS_PAGES_DETAILS_PATH;
	groupData$: Observable<StGroupAllData>;

	constructor(private groupStorageService: GroupStorageService, private router: Router) {}

	ngOnInit() {
		this.groupData$ = this.groupStorageService.getActiveGroup();
		this.groupData$.subscribe((res) => {
			console.log('active group is', res);
		});
	}

	changeDetailsPage(segment: string) {
		this.router.navigate([`/menu/groups/${GROUPS_PAGES.DETAILS}/${this.groupStorageService.activeGroupId}/${segment}`]);
	}
}
