import { Injectable } from '@angular/core';
import { FetchResult } from '@apollo/client';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QueryAdminMainInformationsGQL } from '../graphql-schema';
import { StAdminMainInformationsFragmentFragment } from './../graphql-schema';
import { SetForceReloadStockDetailsGQL } from './../graphql-schema/customGraphql.service';

@Injectable({
	providedIn: 'root',
})
export class GraphqlAdminService {
	constructor(
		private queryAdminMainInformationsGQL: QueryAdminMainInformationsGQL,
		private setForceReloadStockDetailsGQL: SetForceReloadStockDetailsGQL
	) {}

	queryAdminMainInformations(): Observable<StAdminMainInformationsFragmentFragment> {
		return this.queryAdminMainInformationsGQL.watch().valueChanges.pipe(map((x) => x.data.queryAdminMainInformations));
	}

	setForceReloadStockDetails(): Observable<FetchResult<any>> {
		return this.setForceReloadStockDetailsGQL.mutate();
	}
}
