import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlUserService, StUserIdentificationDataFragment, StUserPublicDataSearchFragment } from '@core';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-search-user-page',
	templateUrl: './search-user-page.component.html',
	styleUrls: ['./search-user-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchUserPageComponent implements OnInit {
	userPublicDataSearchFragment$!: Observable<StUserPublicDataSearchFragment | null | undefined> | null;
	isSearchEmpty = true;
	constructor(private graphqlUserService: GraphqlUserService) {}

	ngOnInit() {}

	showUserInformation(userPartialInformation: StUserIdentificationDataFragment) {
		this.isSearchEmpty = false;
		this.userPublicDataSearchFragment$ = this.graphqlUserService.queryStUserPublicDataSearch(userPartialInformation.id);
	}

	clearResult() {
		this.userPublicDataSearchFragment$ = null;
		this.isSearchEmpty = true;
	}
}
