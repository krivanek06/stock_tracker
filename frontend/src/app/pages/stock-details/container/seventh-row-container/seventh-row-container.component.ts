import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-tracker/model/stockDetails';

@Component({
  selector: 'app-seventh-row-container',
  templateUrl: './seventh-row-container.component.html',
  styleUrls: ['./seventh-row-container.component.scss'],
})
export class SeventhRowContainerComponent implements OnInit {
  @Input() stockDetails: StockDetails;
  constructor() { }

  ngOnInit() {}

}
