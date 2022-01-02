import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StUserIndentificationDataFragment, StUserPrivateDataFragment } from '@core';

@Component({
	selector: 'app-user-status-basic-info',
	templateUrl: './user-status-basic-info.component.html',
	styleUrls: ['./user-status-basic-info.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStatusBasicInfoComponent implements OnInit {
	@Input() userIndentification!: StUserIndentificationDataFragment;
	@Input() userPrivateData!: StUserPrivateDataFragment;

	constructor() {}

	ngOnInit(): void {}
}
