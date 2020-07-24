import {Component, Input, OnInit} from '@angular/core';
import {StockDetails} from '../../../../features/stock-tracker/model/stockDetails';

@Component({
  selector: 'app-eigth-row-container',
  templateUrl: './eigth-row-container.component.html',
  styleUrls: ['./eigth-row-container.component.scss'],
})
export class EigthRowContainerComponent implements OnInit {
  @Input() stockDetails: StockDetails;
  constructor() { }

  ngOnInit() {}

}
