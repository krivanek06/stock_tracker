import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-account-info-list',
  templateUrl: './user-account-info-list.component.html',
  styleUrls: ['./user-account-info-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAccountInfoListComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
