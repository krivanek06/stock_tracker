import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-group-details-stats',
  templateUrl: './group-details-stats.component.html',
  styleUrls: ['./group-details-stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GroupDetailsStatsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
