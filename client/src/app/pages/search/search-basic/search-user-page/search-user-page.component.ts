import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GraphqlUserService, StUserIdentificationDataFragment, StUserPublicDataSearchFragment } from '@core';
import { Observable } from 'rxjs';
import { first } from 'rxjs/operators';

@Component({
	selector: 'app-search-user-page',
	templateUrl: './search-user-page.component.html',
	styleUrls: ['./search-user-page.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchUserPageComponent implements OnInit {
	userPublicDataSearchFragment$!: Observable<StUserPublicDataSearchFragment | null | undefined> | null;
	isLoading = false;
	isSearchEmpty = true;
	constructor(private graphqlUserService: GraphqlUserService) {}

	ngOnInit() {}

	showUserInformation(userPartialInformation: StUserIdentificationDataFragment) {
		this.isLoading = true;
		this.isSearchEmpty = false;

		this.userPublicDataSearchFragment$ = this.graphqlUserService.queryStUserPublicDataSearch(userPartialInformation.id);

		this.userPublicDataSearchFragment$.pipe(first()).subscribe((userPublicData) => {
			this.isLoading = false;
		});
	}

	clearResult() {
		this.userPublicDataSearchFragment$ = null;
		this.isSearchEmpty = true;
	}
}
