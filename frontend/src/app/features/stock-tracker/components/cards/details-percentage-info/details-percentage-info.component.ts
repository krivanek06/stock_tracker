import {Component, Input, OnInit} from '@angular/core';
import {PercentageInfo} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-percentage-info',
  templateUrl: './details-percentage-info.component.html',
  styleUrls: ['./details-percentage-info.component.scss'],
})
export class DetailsPercentageInfoComponent implements OnInit {
  @Input() percentageInfo: PercentageInfo;

  constructor() { }

  ngOnInit() {}

}
