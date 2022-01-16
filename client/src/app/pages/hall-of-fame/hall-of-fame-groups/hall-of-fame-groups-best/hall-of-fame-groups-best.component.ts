import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlQueryService } from '@core';
import { HallOfFameBase } from '@hall-of-fame';

@Component({
	selector: 'app-hall-of-fame-groups-best',
	templateUrl: './hall-of-fame-groups-best.component.html',
	styleUrls: ['./hall-of-fame-groups-best.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameGroupsBestComponent extends HallOfFameBase implements OnInit {
	constructor(graphqlQueryService: GraphqlQueryService) {
		super(graphqlQueryService);
	}

	ngOnInit(): void {
		super.ngOnInit();
	}
}
