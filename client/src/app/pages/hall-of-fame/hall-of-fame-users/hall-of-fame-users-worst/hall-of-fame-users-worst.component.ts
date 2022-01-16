import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlQueryService, StHallOfFameUsersFragment } from '@core';
import { map, Observable } from 'rxjs';

@Component({
	selector: 'app-hall-of-fame-users-worst',
	templateUrl: './hall-of-fame-users-worst.component.html',
	styleUrls: ['./hall-of-fame-users-worst.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameUsersWorstComponent implements OnInit {
	hallOfFameUser$!: Observable<StHallOfFameUsersFragment>;
	constructor(private graphqlQueryService: GraphqlQueryService) {}

	ngOnInit(): void {
		this.hallOfFameUser$ = this.graphqlQueryService.queryHallOfFame().pipe(map((res) => res.users));
	}
}
