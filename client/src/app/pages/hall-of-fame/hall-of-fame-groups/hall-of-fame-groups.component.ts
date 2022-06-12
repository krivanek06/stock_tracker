import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlQueryService } from '@core';
import { HallOfFameBase } from '@hall-of-fame';
import { HallOfFameGroupsSubPages } from '../../../features/hall-of-fame/models/hall-of-fame.model';
import { StGroupIdentificationDataFragment } from './../../../core/graphql-schema/customGraphql.service';

@Component({
	selector: 'app-hall-of-fame-groups',
	templateUrl: './hall-of-fame-groups.component.html',
	styleUrls: ['./hall-of-fame-groups.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameGroupsComponent extends HallOfFameBase implements OnInit {
	HallOfFameGroupsSubPages = HallOfFameGroupsSubPages;
	subsectionName = 'Best Groups';

	constructor(graphqlQueryService: GraphqlQueryService, private router: Router) {
		super(graphqlQueryService);
	}

	ngOnInit(): void {
		super.ngOnInit();
	}

	segmentChanged(data: any) {
		const value = data.detail.value;
		this.subsectionName = HallOfFameGroupsSubPages.find((p) => p.value === value)?.name as string;
		this.router.navigateByUrl(`menu/hall-of-fame/groups/${value}`);
	}

	visitGroup({ id }: StGroupIdentificationDataFragment): void {
		console.log('visit', id);
		this.router.navigateByUrl(`menu/groups/${id}`);
	}
}
