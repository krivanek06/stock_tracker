import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StHallOfFameGroupsFragment } from '@core';

@Component({
	selector: 'app-hall-of-fame-groups-worst',
	templateUrl: './hall-of-fame-groups-worst.component.html',
	styleUrls: ['./hall-of-fame-groups-worst.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameGroupsWorstComponent implements OnInit {
	@Input() hallOfFameGroups!: StHallOfFameGroupsFragment;

	constructor() {}

	ngOnInit(): void {}
}
