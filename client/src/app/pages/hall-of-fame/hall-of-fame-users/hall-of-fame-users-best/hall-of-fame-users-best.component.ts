import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlQueryService, StHallOfFameUsersFragment } from '@core';
import { map, Observable } from 'rxjs';

@Component({
	selector: 'app-hall-of-fame-users-best',
	templateUrl: './hall-of-fame-users-best.component.html',
	styleUrls: ['./hall-of-fame-users-best.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameUsersBestComponent implements OnInit {
	hallOfFameUser$!: Observable<StHallOfFameUsersFragment>;
	constructor(private graphqlQueryService: GraphqlQueryService) {}

	ngOnInit(): void {
		this.hallOfFameUser$ = this.graphqlQueryService.queryHallOfFame().pipe(map((res) => res.users));
	}
}
