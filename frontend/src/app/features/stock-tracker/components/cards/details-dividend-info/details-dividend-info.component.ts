import {Component, Input, OnInit} from '@angular/core';
import {DividendInfo} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-dividend-info',
  templateUrl: './details-dividend-info.component.html',
  styleUrls: ['./details-dividend-info.component.scss'],
})
export class DetailsDividendInfoComponent implements OnInit {
  @Input() dividendInfo: DividendInfo;

  constructor() { }

  ngOnInit() {}

}
