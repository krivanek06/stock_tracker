import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GroupStorageService } from './../../../core/services/storage/group-storage.service';

@Injectable({
	providedIn: 'root',
})
export class ResolveGroupDetailsGuard implements Resolve<void> {
	constructor(private GroupStorageService: GroupStorageService) {}

	resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> | Promise<void> | void {
		const groupId = route.paramMap.get('groupId');
		console.log('groupId', groupId);
		this.GroupStorageService.setActiveGroupId(groupId);
	}
}
