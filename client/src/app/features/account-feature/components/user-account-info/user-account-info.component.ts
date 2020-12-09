import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-user-account-info',
  templateUrl: './user-account-info.component.html',
  styleUrls: ['./user-account-info.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserAccountInfoComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
