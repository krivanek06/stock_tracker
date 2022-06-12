import { Injectable } from '@angular/core';
import { DataProxy, FetchResult } from '@apollo/client/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {
	AdminToggleUserRolesGQL,
	AdminToggleUserRolesMutation,
	QueryAdminMainInformationsGQL,
	QueryStUserAdminInformationByIdDocument,
	QueryStUserAdminInformationByIdGQL,
	QueryStUserAdminInformationByIdQuery,
	SetForceReloadStockDetailsGQL,
	StAdminMainInformationsFragmentFragment,
	StUserDataAdminFragment,
} from '../graphql-schema';

@Injectable({
	providedIn: 'root',
})
export class GraphqlAdminService {
	constructor(
		private queryAdminMainInformationsGQL: QueryAdminMainInformationsGQL,
		private queryStUserAdminInformationByIdGQL: QueryStUserAdminInformationByIdGQL,
		private setForceReloadStockDetailsGQL: SetForceReloadStockDetailsGQL,
		private adminToggleUserRolesGQL: AdminToggleUserRolesGQL
	) {}

	queryAdminMainInformations(): Observable<StAdminMainInformationsFragmentFragment> {
		return this.queryAdminMainInformationsGQL
			.watch()
			.valueChanges.pipe(map((x) => x.data.queryAdminMainInformations as StAdminMainInformationsFragmentFragment));
	}

	queryStUserAdminInformationById(id: string): Observable<StUserDataAdminFragment> {
		return this.queryStUserAdminInformationByIdGQL
			.watch(
				{
					id,
				},
				{
					fetchPolicy: 'network-only',
				}
			)
			.valueChanges.pipe(map((res) => res.data.queryUserPublicDataById as StUserDataAdminFragment));
	}

	setForceReloadStockDetails(): Observable<FetchResult<any>> {
		return this.setForceReloadStockDetailsGQL.mutate();
	}

	adminToggleUserRoles(userId: string, role: string): Observable<FetchResult<AdminToggleUserRolesMutation>> {
		return this.adminToggleUserRolesGQL.mutate(
			{
				userId,
				role,
			},
			{
				update: (store: DataProxy, _) => {
					const cache = store.readQuery<QueryStUserAdminInformationByIdQuery>({
						query: QueryStUserAdminInformationByIdDocument,
						variables: {
							id: userId,
						},
					});
					const user = cache?.queryUserPublicDataById;

					if (!user) {
						return;
					}

					const existingRoles = user.userPrivateData.roles;
					const roles = existingRoles.includes(role) ? existingRoles.filter((r) => r !== role) : [...existingRoles, role];

					store.writeQuery({
						query: QueryStUserAdminInformationByIdDocument,
						variables: {
							id: userId,
						},
						data: {
							...cache,
							queryUserPublicDataById: {
								...user,
								userPrivateData: {
									...user.userPrivateData,
									roles: [...roles],
								},
							},
						},
					});
				},
			}
		);
	}
}
