import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StGroupIdentificationInterface } from '@core';
import { GroupButtonsBaseDirective } from '../../classes';

@Component({
	selector: 'app-group-top-users-information',
	templateUrl: './group-top-users-information.component.html',
	styleUrls: ['./group-top-users-information.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupTopUsersInformationComponent extends GroupButtonsBaseDirective implements OnInit {
	@Input() groupAllData!: StGroupIdentificationInterface;

	constructor() {
		super();
	}

	ngOnInit() {
		console.log(this.groupAllData);
	}
}
