import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { GroupStorageService } from '@core';
import { Observable } from 'rxjs';

@Injectable({
	providedIn: 'root',
})
export class ResolveGroupDetailsGuard implements Resolve<void> {
	constructor(private groupStorageService: GroupStorageService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> | Promise<void> | void {
		const groupId = route.paramMap.get('groupId');
		this.groupStorageService.setActiveGroupId(groupId);
	}
}
