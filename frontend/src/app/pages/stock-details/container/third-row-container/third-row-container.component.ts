import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-details-feature/model/stockDetails';

@Component({
  selector: 'app-third-row-container',
  templateUrl: './third-row-container.component.html',
  styleUrls: ['./third-row-container.component.scss'],
})
export class ThirdRowContainerComponent implements OnInit {
  @Input() stockDetails: StockDetails;
  constructor() { }

  ngOnInit() {}

}
