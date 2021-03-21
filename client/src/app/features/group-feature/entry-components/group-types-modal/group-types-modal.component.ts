import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {StGroupPartialData, StUserGroups, UserStorageService} from '@core';
import {NavParams, PopoverController} from '@ionic/angular';

@Component({
    selector: 'app-group-types-modal',
    templateUrl: './group-types-modal.component.html',
    styleUrls: ['./group-types-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupTypesModalComponent implements OnInit {
    groups: StUserGroups;
    activeGroup: string;

    constructor(private popoverController: PopoverController,
                private navParams: NavParams,
                private userStorageService: UserStorageService) {
        this.activeGroup = this.navParams.get('activeGroup');
    }

    ngOnInit() {
        this.groups = this.userStorageService.user.groups;
    }

    dismissModal() {
        this.popoverController.dismiss();
    }

    clickedGroup(group: StGroupPartialData) {
        this.popoverController.dismiss({group});
    }

}
