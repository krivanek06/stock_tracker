import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {StGroupAllData, StGroupAllDataInput, StUserIndetification, UserStorageService} from '@core';
import {ModalController, NavParams} from '@ionic/angular';
import {ConfirmableWithCheckbox} from '@shared';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-group-create-modal',
    templateUrl: './group-create-modal.component.html',
    styleUrls: ['./group-create-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupCreateModalComponent implements OnInit {
    editedGroup: StGroupAllData;
    user$: Observable<StUserIndetification>;

    constructor(private modalController: ModalController, private userStorageService: UserStorageService, private navParams: NavParams) {
    }

    ngOnInit() {
        this.user$ = this.userStorageService.getUserIdentification();
        this.editedGroup = this.navParams.get('editedGroup');
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    submitGroup(groupAllDataInput: StGroupAllDataInput) {
        if (this.editedGroup) {
            groupAllDataInput.groupId = this.editedGroup.id;
            this.editGroup(groupAllDataInput);
        } else {
            this.createGroup(groupAllDataInput);
        }
    }

    @ConfirmableWithCheckbox('Please confirm creating new group', 'confirm')
    private createGroup(groupAllDataInput: StGroupAllDataInput) {
        this.modalController.dismiss({groupAllDataInput});
    }

    @ConfirmableWithCheckbox('Please confirm editing group', 'confirm')
    private editGroup(groupAllDataInput: StGroupAllDataInput) {
        this.modalController.dismiss({groupAllDataInput});
    }
}
