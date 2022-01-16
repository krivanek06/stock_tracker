import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-group-account-info-list',
  templateUrl: './group-account-info-list.component.html',
  styleUrls: ['./group-account-info-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupAccountInfoListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
