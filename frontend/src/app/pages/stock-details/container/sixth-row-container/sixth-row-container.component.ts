import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-details-feature/model/stockDetails';

@Component({
  selector: 'app-sixth-row-container',
  templateUrl: './sixth-row-container.component.html',
  styleUrls: ['./sixth-row-container.component.scss'],
})
export class SixthRowContainerComponent implements OnInit {
  @Input() stockDetails: StockDetails;
  constructor() { }

  ngOnInit() {}

}
