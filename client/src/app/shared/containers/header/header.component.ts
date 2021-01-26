import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {AuthFeatureService} from '../../../features/auth-feature/services/auth-feature.service';
import {Router} from '@angular/router';
import {StUserPublicData} from '../../../api/customGraphql.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderComponent implements OnInit {
    @Input() pageName: string;
    @Input() pageIcon: string;

    user$: Observable<StUserPublicData>;

    constructor(private authFeatureService: AuthFeatureService,
                private router: Router) {
    }

    ngOnInit() {
        this.user$ = this.authFeatureService.getUser();
        this.user$.subscribe(console.log);
    }

    redirectToSearch() {
        this.router.navigate([`/menu/search`]);
    }
}
