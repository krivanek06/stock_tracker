import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {UpgradeDowngradeHistory} from '../../../../api/customGraphql.service';

@Component({
  selector: 'app-grading-history',
  templateUrl: './grading-history.component.html',
  styleUrls: ['./grading-history.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GradingHistoryComponent implements OnInit {
  @Input() history: UpgradeDowngradeHistory;

  constructor() { }

  ngOnInit() {}

}
