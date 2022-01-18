import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
	QueryStUserPublicDataSearchByIdGQL,
	QueryUserIdentificationByUsernameGQL,
	StUserIdentificationDataFragment,
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

	queryUserIdentificationByUsername(usernamePrefix: string): Observable<StUserIdentificationDataFragment[]> {
		return this.queryUserIndentificationByUsernameGQL
			.fetch({
				usernamePrefix,
			})
			.pipe(map((x) => x.data.queryUserPublicDataByUsername.map((k) => k as StUserIdentificationDataFragment)));
	}

	queryStUserPublicDataSearch(userId: string): Observable<StUserPublicDataSearchFragment> {
		return this.queryStUserPublicDataSearchByIdGQL
			.fetch({
				id: userId,
			})
			.pipe(map((res) => res.data.queryUserPublicDataById as StUserPublicDataSearchFragment));
	}
}
