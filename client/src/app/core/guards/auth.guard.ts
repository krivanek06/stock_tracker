import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { UserStorageService } from '../services';

@Injectable({
	providedIn: 'root',
})
export class AuthGuard implements CanActivate {
	constructor(private userStorageService: UserStorageService, private router: Router) {}

	canActivate(
		next: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.userStorageService.getUser().pipe(
			map((user) => {
				if (!!user) {
					return true;
				}
				return this.router.createUrlTree(['/menu/market']);
			})
		);
	}
}
