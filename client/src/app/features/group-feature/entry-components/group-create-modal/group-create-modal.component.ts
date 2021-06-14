import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {ModalController} from '@ionic/angular';
import {Confirmable} from '@shared';
import {StGroupAllDataInput} from '@core';

@Component({
    selector: 'app-group-create-modal',
    templateUrl: './group-create-modal.component.html',
    styleUrls: ['./group-create-modal.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupCreateModalComponent implements OnInit {

    constructor(private modalController: ModalController) {
    }

    ngOnInit() {
    }

    dismissModal() {
        this.modalController.dismiss();
    }

    @Confirmable('Please confirm creating new group')
    createGroup(groupAllDataInput: StGroupAllDataInput) {
        this.modalController.dismiss({groupAllDataInput});
    }
}
