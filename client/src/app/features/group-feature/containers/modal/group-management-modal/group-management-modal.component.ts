import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-group-management-modal',
  templateUrl: './group-management-modal.component.html',
  styleUrls: ['./group-management-modal.component.scss'],
})
export class GroupManagementModalComponent implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  dismissModal() {
    this.modalController.dismiss();
  }

}
