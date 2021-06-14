import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {StGroupIdentificationDataFragment, StUserPublicData, UserStorageService} from '@core';
import {NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {PopoverController} from '@ionic/angular';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
    user$: Observable<StUserPublicData>;
    selectedGroupId$: Observable<string>;

    constructor(private userStorageService: UserStorageService,
                private popoverController: PopoverController,
                private router: Router) {
    }

    ngOnInit() {
        this.user$ = this.userStorageService.getUser();

        this.watchSelectedGroup();
    }

    redirectToGroupReadOnly(group: StGroupIdentificationDataFragment) {
        this.router.navigate([`menu/groups/read/${group.groupId}`]);
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
