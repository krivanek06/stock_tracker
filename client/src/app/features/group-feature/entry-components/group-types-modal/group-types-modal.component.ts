import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StGroupPartialData, StUserGroups} from '../../../../api/customGraphql.service';
import {ModalController, NavParams, PopoverController} from '@ionic/angular';
import {AuthFeatureService} from '../../../auth-feature/services/auth-feature.service';

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
                private authService: AuthFeatureService) {
      this.activeGroup = this.navParams.get('activeGroup');
    }

    ngOnInit() {
        this.groups = this.authService.user.groups;
    }

    dismissModal() {
      this.popoverController.dismiss();
    }

    clickedGroup(group: StGroupPartialData) {
        this.popoverController.dismiss({group});
    }

}
