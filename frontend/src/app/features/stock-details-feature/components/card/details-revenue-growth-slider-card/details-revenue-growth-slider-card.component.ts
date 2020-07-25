import {Component, Input, OnInit} from '@angular/core';
import {RevenueEstimate, RevenueEstimateData} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-revenue-growth-slider-card',
  templateUrl: './details-revenue-growth-slider-card.component.html',
  styleUrls: ['./details-revenue-growth-slider-card.component.scss'],
})
export class DetailsRevenueGrowthSliderCardComponent implements OnInit {
  @Input() revenueEst: RevenueEstimate;

  constructor() { }

  ngOnInit() {}

}
