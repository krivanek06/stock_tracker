import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GroupStorageService, StGroupAllData } from '@core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-groups',
	templateUrl: './groups.component.html',
	styleUrls: ['./groups.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsComponent implements OnInit {
	activatedGroupId$: Observable<string>;

	constructor(private groupStorageService: GroupStorageService) {}

	ngOnInit() {
		this.activatedGroupId$ = this.groupStorageService.getActivatedGroupId();
	}

	selectGroup(groupAllData: StGroupAllData) {
		this.groupStorageService.setActiveGroupId(groupAllData.id);
	}
}
