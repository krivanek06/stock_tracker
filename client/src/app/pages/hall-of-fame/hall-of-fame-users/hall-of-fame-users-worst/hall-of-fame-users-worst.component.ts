import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlQueryService } from '@core';
import { HallOfFameBase } from '@hall-of-fame';

@Component({
	selector: 'app-hall-of-fame-users-worst',
	templateUrl: './hall-of-fame-users-worst.component.html',
	styleUrls: ['./hall-of-fame-users-worst.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameUsersWorstComponent extends HallOfFameBase implements OnInit {
	constructor(graphqlQueryService: GraphqlQueryService) {
		super(graphqlQueryService);
	}

	ngOnInit(): void {
		super.ngOnInit();
	}
}
