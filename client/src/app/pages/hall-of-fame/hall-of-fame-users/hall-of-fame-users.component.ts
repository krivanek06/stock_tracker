import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GraphqlQueryService, StUserPublicData, UserStorageService } from '@core';
import { HallOfFameBase } from '@hall-of-fame';
import { Observable } from 'rxjs';
import { HallOfFameUserSubPages } from '../hall-of-fame.model';

@Component({
	selector: 'app-hall-of-fame-users',
	templateUrl: './hall-of-fame-users.component.html',
	styleUrls: ['./hall-of-fame-users.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFameUsersComponent extends HallOfFameBase implements OnInit {
	HallOfFameUserSubPages = HallOfFameUserSubPages;
	userPublicData$!: Observable<StUserPublicData>;

	subsectionName: string = 'Best Users';

	constructor(graphqlQueryService: GraphqlQueryService, private userStorageService: UserStorageService, private router: Router) {
		super(graphqlQueryService);
	}

	ngOnInit(): void {
		super.ngOnInit();
		this.userPublicData$ = this.userStorageService.getUser();
	}

	segmentChanged(data: any) {
		const value = data.detail.value;
		this.subsectionName = HallOfFameUserSubPages.find((p) => p.value === value)?.name as string;
		this.router.navigateByUrl(`menu/hall-of-fame/users/${value}`);
	}
}
