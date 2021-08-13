import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-user-account-not-activated-message',
  templateUrl: './user-account-not-activated-message.component.html',
  styleUrls: ['./user-account-not-activated-message.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAccountNotActivatedMessageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
