import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-details-feature/model/stockDetails';
import {ChartType} from '../../../../shared/models/sharedModel';

@Component({
  selector: 'app-second-row-container',
  templateUrl: './second-row-container.component.html',
  styleUrls: ['./second-row-container.component.scss'],
})
export class SecondRowContainerComponent implements OnInit {
  @Input() stockDetails: StockDetails;
  ChartType = ChartType;

  constructor() { }

  ngOnInit() {}

}
