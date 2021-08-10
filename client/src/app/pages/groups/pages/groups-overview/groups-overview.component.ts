import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StUserPublicData, UserStorageService } from '@core';
import { GroupFeatureFacadeService } from '@group-feature';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-groups-overview',
	templateUrl: './groups-overview.component.html',
	styleUrls: ['./groups-overview.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsOverviewComponent implements OnInit {
	user$: Observable<StUserPublicData>;

	constructor(private groupFeatureFacadeService: GroupFeatureFacadeService, private userStorageService: UserStorageService) {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUser();
	}

	createGroup() {
		this.groupFeatureFacadeService.createGroup();
	}
}
