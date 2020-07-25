import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-details-feature/model/stockDetails';

@Component({
  selector: 'app-second-row-container',
  templateUrl: './second-row-container.component.html',
  styleUrls: ['./second-row-container.component.scss'],
})
export class SecondRowContainerComponent implements OnInit {
  @Input() stockDetails: StockDetails;

  constructor() { }

  ngOnInit() {}

}
