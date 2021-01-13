import {Component, OnInit} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {Observable} from 'rxjs';
import {StGroupPartialData, StUserPublicData} from '../../api/customGraphql.service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {filter, map, takeUntil} from 'rxjs/operators';
import {ModalController, PopoverController} from '@ionic/angular';
import {GroupTypesModalComponent} from '../../features/group-feature/entry-components/group-types-modal/group-types-modal.component';

@Component({
    selector: 'app-groups',
    templateUrl: './groups.component.html',
    styleUrls: ['./groups.component.scss'],
})
export class GroupsComponent implements OnInit {
    user$: Observable<StUserPublicData>;
    selectedGroupId$: Observable<string>;

    constructor(private authService: AuthFeatureService,
                private popoverController: PopoverController,
                private router: Router) {
    }

    ngOnInit() {
        this.user$ = this.authService.getUser();

        this.watchSelectedGroup();
    }

    redirectToGroupReadOnly(group: StGroupPartialData) {
        this.router.navigate([`menu/groups/read/${group.groupId}`]);
    }

    async showGroupsInModal(activeGroup: string) {
        const popOver = await this.popoverController.create({
            component: GroupTypesModalComponent,
            componentProps: {activeGroup},
            cssClass: 'custom-popover'
        });
        popOver.present();
        const response = await popOver.onDidDismiss();
        if (response?.data?.group) {
            this.redirectToGroupReadOnly(response.data.group);
        }
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
