import {Component, OnInit} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {Observable} from 'rxjs';
import {StGroupPartialData, StUserPublicData} from '../../api/customGraphql.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
    user$: Observable<StUserPublicData>;
    selectedGroupId$: Observable<string>;

    constructor(private authService: AuthFeatureService,
                private router: Router) {
    }

    ngOnInit() {
        this.user$ = this.authService.getUser();

        this.watchSelectedGroup();
    }

    redirectToGroupReadOnly(groupPartialData: StGroupPartialData) {
        this.router.navigate([`menu/groups/read/${groupPartialData.groupId}`]);
    }

    // split url by '/' and get last part (usually groupId)
    private watchSelectedGroup() {
        this.selectedGroupId$ = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map((data: NavigationEnd) => data.url),
            map(url => url.split('/')),
            map(splittedUrl => splittedUrl[splittedUrl.length - 1])
        );
    }
}
