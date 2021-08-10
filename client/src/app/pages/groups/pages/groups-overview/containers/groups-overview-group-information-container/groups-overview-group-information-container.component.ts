import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StGroupAllData } from '@core';
import { GroupFeatureFacadeService } from '@group-feature';
import { Confirmable } from '@shared';
import { GROUPS_PAGES } from '../../../../model/groups.model';

@Component({
	selector: 'app-groups-overview-group-information-container',
	templateUrl: './groups-overview-group-information-container.component.html',
	styleUrls: ['./groups-overview-group-information-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsOverviewGroupInformationContainerComponent implements OnInit {
	@Input() groupAllData: StGroupAllData;
	@Input() showAcceptButton: boolean;
	@Input() showDeclineButton: boolean;

	constructor(private groupFeatureFacadeService: GroupFeatureFacadeService, private router: Router) {}

	ngOnInit() {}

	@Confirmable('Please confirm your decision', 'Cancel', 'Confirm')
	answerReceivedGroupInvitation(group: StGroupAllData, answer: boolean) {
		this.groupFeatureFacadeService.answerReceivedGroupInvitation(group, answer);
	}

	visitGroup({ id }: StGroupAllData) {
		this.router.navigate([`/menu/groups/${GROUPS_PAGES.DETAILS}/${id}`]);
	}
}
