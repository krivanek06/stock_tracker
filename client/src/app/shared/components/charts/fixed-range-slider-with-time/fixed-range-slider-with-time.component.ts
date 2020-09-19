import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {RevenueEstimate} from '../../../../api/customGraphql.service';

@Component({
  selector: 'app-fixed-range-slider-with-time',
  templateUrl: './fixed-range-slider-with-time.component.html',
  styleUrls: ['./fixed-range-slider-with-time.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixedRangeSliderWithTimeComponent implements OnInit {
  @Input() revenuEst: RevenueEstimate;

  constructor() { }

  ngOnInit() {}

}
