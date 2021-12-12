import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
	QueryStUserPublicDataSearchByIdGQL,
	QueryUserIdentificationByUsernameGQL,
	StUserIndentificationDataFragment,
	StUserPublicDataSearchFragment,
} from '../graphql-schema';

@Injectable({
	providedIn: 'root',
})
export class GraphqlUserService {
	constructor(
		private queryUserIndentificationByUsernameGQL: QueryUserIdentificationByUsernameGQL,
		private queryStUserPublicDataSearchByIdGQL: QueryStUserPublicDataSearchByIdGQL
	) {}

	queryUserIdentificationByUsername(usernamePrefix: string): Observable<StUserIndentificationDataFragment[]> {
		return this.queryUserIndentificationByUsernameGQL
			.fetch({
				usernamePrefix,
			})
			.pipe(map((x) => x.data.queryUserPublicDataByUsername.map((k) => k as StUserIndentificationDataFragment)));
	}

	queryStUserPublicDataSearch(userId: string): Observable<StUserPublicDataSearchFragment | null | undefined> {
		return this.queryStUserPublicDataSearchByIdGQL
			.fetch({
				id: userId,
			})
			.pipe(map((res) => res.data.queryUserPublicDataById));
	}
}
