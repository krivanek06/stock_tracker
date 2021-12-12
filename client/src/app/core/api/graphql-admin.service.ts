import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QueryAdminMainInformationsGQL, SetForceReloadStockDetailsGQL, StAdminMainInformationsFragmentFragment } from '../graphql-schema';

@Injectable({
	providedIn: 'root',
})
export class GraphqlAdminService {
	constructor(
		private queryAdminMainInformationsGQL: QueryAdminMainInformationsGQL,
		private setForceReloadStockDetailsGQL: SetForceReloadStockDetailsGQL
	) {}

	queryAdminMainInformations(): Observable<StAdminMainInformationsFragmentFragment> {
		return this.queryAdminMainInformationsGQL
			.watch()
			.valueChanges.pipe(map((x) => x.data.queryAdminMainInformations as StAdminMainInformationsFragmentFragment));
	}

	setForceReloadStockDetails(): Observable<FetchResult<any>> {
		return this.setForceReloadStockDetailsGQL.mutate();
	}
}
