import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { QueryAdminMainInformationsGQL } from '../graphql-schema';
import { StAdminMainInformationsFragmentFragment } from './../graphql-schema';

@Injectable({
	providedIn: 'root',
})
export class GraphqlAdminService {
	constructor(private queryAdminMainInformationsGQL: QueryAdminMainInformationsGQL) {}

	queryAdminMainInformations(): Observable<StAdminMainInformationsFragmentFragment> {
		return this.queryAdminMainInformationsGQL.watch().valueChanges.pipe(map((x) => x.data.queryAdminMainInformations));
	}
}
