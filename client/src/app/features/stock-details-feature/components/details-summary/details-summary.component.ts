import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StockDetails, StockSummaryFragmentFragment, Summary} from '../../../../api/customGraphql.service';

@Component({
  selector: 'app-details-summary',
  templateUrl: './details-summary.component.html',
  styleUrls: ['./details-summary.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsSummaryComponent implements OnInit {
  @Input() summary: Summary;

  constructor() { }

  ngOnInit() {}

}
