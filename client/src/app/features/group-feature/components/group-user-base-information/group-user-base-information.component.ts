import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StGroupUser } from '@core';
import { PositionColors } from '@shared';

@Component({
	selector: 'app-group-user-base-information',
	templateUrl: './group-user-base-information.component.html',
	styleUrls: ['./group-user-base-information.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupUserBaseInformationComponent implements OnInit {
	@Input() groupUser: StGroupUser;
	@Input() useClassStyling: PositionColors = '';
	@Input() showIncreasePosition: boolean = false;
	@Input() clickable: boolean = false;

	constructor() {}

	ngOnInit() {}
}
