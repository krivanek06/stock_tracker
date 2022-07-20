import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StHallOfFameGroupsFragment } from '@core';

@Component({
	selector: 'app-hall-of-fame-groups-best',
	templateUrl: './hall-of-fame-groups-best.component.html',
	styleUrls: ['./hall-of-fame-groups-best.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameGroupsBestComponent implements OnInit {
	@Input() hallOfFameGroups!: StHallOfFameGroupsFragment;

	constructor() {}

	ngOnInit(): void {}
}
