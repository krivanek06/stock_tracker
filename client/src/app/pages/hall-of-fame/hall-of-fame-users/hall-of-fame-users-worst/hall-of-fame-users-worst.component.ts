import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StHallOfFameUsersFragment } from '@core';

@Component({
	selector: 'app-hall-of-fame-users-worst',
	templateUrl: './hall-of-fame-users-worst.component.html',
	styleUrls: ['./hall-of-fame-users-worst.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameUsersWorstComponent implements OnInit {
	@Input() hallOfFameUser!: StHallOfFameUsersFragment;

	constructor() {}

	ngOnInit(): void {}
}
