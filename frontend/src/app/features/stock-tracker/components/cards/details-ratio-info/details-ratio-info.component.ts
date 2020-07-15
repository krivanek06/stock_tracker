import {Component, Input, OnInit} from '@angular/core';
import {RatioInfo} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-ratio-info',
  templateUrl: './details-ratio-info.component.html',
  styleUrls: ['./details-ratio-info.component.scss'],
})
export class DetailsRatioInfoComponent implements OnInit {
  @Input() ratioInfo: RatioInfo;

  constructor() { }

  ngOnInit() {}

}
