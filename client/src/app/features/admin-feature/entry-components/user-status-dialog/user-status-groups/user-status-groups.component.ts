import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StUserGroupsFragment } from '@core';

@Component({
	selector: 'app-user-status-groups',
	templateUrl: './user-status-groups.component.html',
	styleUrls: ['./user-status-groups.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserStatusGroupsComponent implements OnInit {
	@Input() groups!: StUserGroupsFragment;

	constructor() {}

	ngOnInit(): void {}
}
