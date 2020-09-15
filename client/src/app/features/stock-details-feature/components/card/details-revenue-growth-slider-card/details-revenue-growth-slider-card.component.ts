import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {RevenueEstimate} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-revenue-growth-slider-card',
  templateUrl: './details-revenue-growth-slider-card.component.html',
  styleUrls: ['./details-revenue-growth-slider-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsRevenueGrowthSliderCardComponent implements OnInit {
  @Input() revenueEst: RevenueEstimate;

  constructor() { }

  ngOnInit() {}

}
