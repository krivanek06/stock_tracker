import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { UserStorageService } from '@core';
import { DialogService } from '@shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
	providedIn: 'root',
})
export class TradingGuard implements CanActivate {
	constructor(private userStorageService: UserStorageService, private router: Router) {}
	canActivate(
		route: ActivatedRouteSnapshot,
		state: RouterStateSnapshot
	): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
		return this.userStorageService.getUser().pipe(
			map((user) => {
				if (!!user.userPrivateData.finnhubKey) {
					return true;
				}
				DialogService.showNotificationBar('Unauthorized access, traading is not yet enabled. You have been redirected', 'error');
				return this.router.createUrlTree(['/menu/market']);
			})
		);
	}
}
