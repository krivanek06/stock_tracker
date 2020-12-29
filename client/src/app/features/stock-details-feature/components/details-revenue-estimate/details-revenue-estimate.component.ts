import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {RevenueEstimate} from '../../../../api/customGraphql.service';

@Component({
  selector: 'app-details-revenue-estimate',
  templateUrl: './details-revenue-estimate.component.html',
  styleUrls: ['./details-revenue-estimate.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsRevenueEstimateComponent implements OnInit {
  @Input() revenueEst: RevenueEstimate;

  constructor() { }

  ngOnInit() {}

}
