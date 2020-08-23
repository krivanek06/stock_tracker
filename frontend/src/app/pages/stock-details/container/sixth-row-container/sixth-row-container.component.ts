import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-details-feature/model/stockDetails';
import {ChartType} from '../../../../shared/models/sharedModel';

@Component({
  selector: 'app-sixth-row-container',
  templateUrl: './sixth-row-container.component.html',
  styleUrls: ['./sixth-row-container.component.scss'],
})
export class SixthRowContainerComponent implements OnInit {
  @Input() stockDetails: StockDetails;
  ChartType = ChartType;
  constructor() { }

  ngOnInit() {}

}
