import {Component, Input, OnInit} from '@angular/core';
import {RevenueEstimateData} from '../../../model/stockDetails';

@Component({
  selector: 'app-revenue-growth-slider',
  templateUrl: './revenue-growth-slider.component.html',
  styleUrls: ['./revenue-growth-slider.component.scss'],
})
export class RevenueGrowthSliderComponent implements OnInit {
  @Input() revenueEst: RevenueEstimateData;
  constructor() { }

  ngOnInit() {}

}
