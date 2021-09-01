import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GroupStorageService, StGroupAllData, StUserPublicData, UserStorageService } from '@core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-group-details-overview',
	templateUrl: './group-details-overview.component.html',
	styleUrls: ['./group-details-overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsOverviewComponent implements OnInit {
	user$: Observable<StUserPublicData>;
	isUserOwner$: Observable<boolean>;

	groupAllData$: Observable<StGroupAllData>;

	constructor(private groupStorageService: GroupStorageService, private userStorageService: UserStorageService) {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUser();
		this.groupAllData$ = this.groupStorageService.getActiveGroup();
		this.isUserOwner$ = this.groupStorageService.isUserOwnerObs();
	}
}
