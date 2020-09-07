import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Dividend} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-dividend-card',
  templateUrl: './details-dividend-card.component.html',
  styleUrls: ['./details-dividend-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsDividendCardComponent implements OnInit {
  @Input() dividendInfo: Dividend;

  constructor() { }

  ngOnInit() {}

}
