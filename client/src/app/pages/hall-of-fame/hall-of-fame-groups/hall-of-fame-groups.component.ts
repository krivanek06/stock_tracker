import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlQueryService, StHallOfFameGroupsFragment } from '@core';
import { map, Observable } from 'rxjs';
import { StGroupIdentificationDataFragment } from './../../../core/graphql-schema/customGraphql.service';

@Component({
	selector: 'app-hall-of-fame-groups',
	templateUrl: './hall-of-fame-groups.component.html',
	styleUrls: ['./hall-of-fame-groups.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameGroupsComponent implements OnInit {
	hallOfFameGroups$!: Observable<StHallOfFameGroupsFragment>;

	constructor(private router: Router, private graphqlQueryService: GraphqlQueryService) {}

	ngOnInit(): void {
		this.hallOfFameGroups$ = this.graphqlQueryService.queryHallOfFame().pipe(map((res) => res.groups));
	}

	visitGroup({ id }: StGroupIdentificationDataFragment): void {
		console.log('visit', id);
		this.router.navigateByUrl(`menu/groups/${id}`);
	}
}
