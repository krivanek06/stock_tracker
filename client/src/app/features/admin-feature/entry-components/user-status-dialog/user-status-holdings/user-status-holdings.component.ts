import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StHoldingInfoFragmentFragment } from '@core';

@Component({
	selector: 'app-user-status-holdings',
	templateUrl: './user-status-holdings.component.html',
	styleUrls: ['./user-status-holdings.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStatusHoldingsComponent implements OnInit {
	@Input() holdingInfoFragment: StHoldingInfoFragmentFragment[] = [];
	constructor() {}

	ngOnInit(): void {}
}
