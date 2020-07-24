import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-tracker/model/stockDetails';

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
