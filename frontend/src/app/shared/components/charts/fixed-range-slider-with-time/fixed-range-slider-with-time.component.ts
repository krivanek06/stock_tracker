import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-fixed-range-slider-with-time',
  templateUrl: './fixed-range-slider-with-time.component.html',
  styleUrls: ['./fixed-range-slider-with-time.component.scss'],
})
export class FixedRangeSliderWithTimeComponent implements OnInit {
  @Input() timeEstimation: string;
  @Input() yearAgo: string;
  @Input() growthPercent: number;

  @Input() min: number;
  @Input() max: number;
  @Input() value: number;

  @Input() minDisplayName: string;
  @Input() maxDisplayName: string;
  @Input() valueDisplayName: string;

  constructor() { }

  ngOnInit() {}

}
