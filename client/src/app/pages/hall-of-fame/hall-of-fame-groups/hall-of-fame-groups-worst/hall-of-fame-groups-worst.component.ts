import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlQueryService } from '@core';
import { HallOfFameBase } from '@hall-of-fame';

@Component({
	selector: 'app-hall-of-fame-groups-worst',
	templateUrl: './hall-of-fame-groups-worst.component.html',
	styleUrls: ['./hall-of-fame-groups-worst.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameGroupsWorstComponent extends HallOfFameBase implements OnInit {
	constructor(graphqlQueryService: GraphqlQueryService) {
		super(graphqlQueryService);
	}

	ngOnInit(): void {
		super.ngOnInit();
	}
}
