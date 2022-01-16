import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-hall-of-fame-groups',
  templateUrl: './hall-of-fame-groups.component.html',
  styleUrls: ['./hall-of-fame-groups.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HallOfFameGroupsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
