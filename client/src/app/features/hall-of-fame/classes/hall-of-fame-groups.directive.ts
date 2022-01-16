import { Directive, OnInit } from '@angular/core';
import { GraphqlQueryService, StHallOfFameGroupsFragment, StHallOfFameUsersFragment } from '@core';
import { map, Observable } from 'rxjs';

@Directive()
export abstract class HallOfFameBase implements OnInit {
	hallOfFameUser$!: Observable<StHallOfFameUsersFragment>;
	hallOfFameGroups$!: Observable<StHallOfFameGroupsFragment>;

	constructor(private graphqlQueryService: GraphqlQueryService) {}

	ngOnInit(): void {
		this.hallOfFameUser$ = this.graphqlQueryService.queryHallOfFame().pipe(map((res) => res.users));
		this.hallOfFameGroups$ = this.graphqlQueryService.queryHallOfFame().pipe(map((res) => res.groups));
	}
}
