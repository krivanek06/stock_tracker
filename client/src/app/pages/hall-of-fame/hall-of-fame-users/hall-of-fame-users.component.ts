import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlQueryService, StHallOfFameUsersFragment, StUserPublicData, UserStorageService } from '@core';
import { map, Observable } from 'rxjs';
import { HallOfFameUserSubPages } from '../hall-of-fame.model';

@Component({
	selector: 'app-hall-of-fame-users',
	templateUrl: './hall-of-fame-users.component.html',
	styleUrls: ['./hall-of-fame-users.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameUsersComponent implements OnInit {
	HallOfFameUserSubPages = HallOfFameUserSubPages;
	hallOfFameUser$!: Observable<StHallOfFameUsersFragment>;
	userPublicData$!: Observable<StUserPublicData>;

	constructor(private graphqlQueryService: GraphqlQueryService, private userStorageService: UserStorageService, private router: Router) {}

	ngOnInit(): void {
		this.userPublicData$ = this.userStorageService.getUser();
		this.hallOfFameUser$ = this.graphqlQueryService.queryHallOfFame().pipe(map((res) => res.users));
	}

	segmentChanged(data: any) {
		this.router.navigateByUrl(`menu/hall-of-fame/users/${data.detail.value}`);
	}
}
