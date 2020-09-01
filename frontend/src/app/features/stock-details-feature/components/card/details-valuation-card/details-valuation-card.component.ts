import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Valuation} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-valuation-card',
  templateUrl: './details-valuation-card.component.html',
  styleUrls: ['./details-valuation-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsValuationCardComponent implements OnInit {
  @Input() valuation: Valuation;

  constructor() { }

  ngOnInit() {}

}
