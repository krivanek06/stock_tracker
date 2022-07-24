import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StHallOfFameUsersFragment } from '@core';

@Component({
	selector: 'app-hall-of-fame-users-best',
	templateUrl: './hall-of-fame-users-best.component.html',
	styleUrls: ['./hall-of-fame-users-best.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameUsersBestComponent implements OnInit {
	@Input() hallOfFameUser!: StHallOfFameUsersFragment;

	constructor() {}

	ngOnInit(): void {}
}
