import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthFeatureService} from '../services/auth-feature.service';
import {map, tap} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authFeatureService: AuthFeatureService,
                private router: Router) {
    }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

        return this.authFeatureService.getUser().pipe(
            map(user => !!user),
            tap(login => {
                if (!login) {
                    this.router.navigate(['/login']);
                }
            })
        );
    }

}
