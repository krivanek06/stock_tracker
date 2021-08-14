import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { StGroupAllDataInput, StUserIndetification, UserStorageService } from '@core';
import { ModalController } from '@ionic/angular';
import { Confirmable } from '@shared';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-group-create-modal',
	templateUrl: './group-create-modal.component.html',
	styleUrls: ['./group-create-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupCreateModalComponent implements OnInit {
	user$: Observable<StUserIndetification>;
	constructor(private modalController: ModalController, private userStorageService: UserStorageService) {}

	ngOnInit() {
		this.user$ = this.userStorageService.getUserIdentification();
	}

	dismissModal() {
		this.modalController.dismiss();
	}

	@Confirmable('Please confirm creating new group')
	createGroup(groupAllDataInput: StGroupAllDataInput) {
		this.modalController.dismiss({ groupAllDataInput });
	}
}
