import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {GroupFeatureFacadeService} from '../services';

@Injectable({
    providedIn: 'root'
})
export class ResolveGroupDetailsGuard implements Resolve<void> {
    constructor(private groupFeatureFacadeService: GroupFeatureFacadeService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<void> | Promise<void> | void {
        const groupId = route.paramMap.get('groupId');
        this.groupFeatureFacadeService.changeActiveGroup(groupId);
    }

}
