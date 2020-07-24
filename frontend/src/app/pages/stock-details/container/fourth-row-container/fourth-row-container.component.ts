import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-tracker/model/stockDetails';

@Component({
  selector: 'app-fourth-row-container',
  templateUrl: './fourth-row-container.component.html',
  styleUrls: ['./fourth-row-container.component.scss'],
})
export class FourthRowContainerComponent implements OnInit {
  @Input() stockDetails: StockDetails;
  constructor() { }

  ngOnInit() {}

}
