import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlQueryService } from '@core';
import { map, Observable } from 'rxjs';
import { HallOfFameGroupsSubPages } from '../hall-of-fame.model';
import { StHallOfFameGroupsFragment } from './../../../core/graphql-schema/customGraphql.service';

@Component({
	selector: 'app-hall-of-fame-groups',
	templateUrl: './hall-of-fame-groups.component.html',
	styleUrls: ['./hall-of-fame-groups.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameGroupsComponent implements OnInit {
	HallOfFameGroupsSubPages = HallOfFameGroupsSubPages;
	hallOfFameGroups$!: Observable<StHallOfFameGroupsFragment>;

	constructor(private graphqlQueryService: GraphqlQueryService, private router: Router) {}

	ngOnInit(): void {
		this.hallOfFameGroups$ = this.graphqlQueryService.queryHallOfFame().pipe(map((res) => res.groups));
	}

	segmentChanged(data: any) {
		this.router.navigateByUrl(`menu/hall-of-fame/groups/${data.detail.value}`);
	}
}
