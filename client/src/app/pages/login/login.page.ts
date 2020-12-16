import {Component, OnDestroy, OnInit} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {filter, takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';
import {Router} from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit, OnDestroy {
    private destroy$: Subject<boolean> = new Subject<boolean>();

    constructor(private authFeatureService: AuthFeatureService,
                private router: Router) {
    }

    ngOnInit() {
        this.authFeatureService.getUser().pipe(
            filter(user => !!user),
            takeUntil(this.destroy$)
        ).subscribe(() => {
            this.router.navigate(['/menu/dashboard']);
        });
    }

    ngOnDestroy(): void {
        this.destroy$.next(true);
        this.destroy$.complete();
    }

}
