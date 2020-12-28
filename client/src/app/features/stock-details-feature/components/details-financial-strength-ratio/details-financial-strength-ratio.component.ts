import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {QueryStockDetailsQuery, StockDetails} from '../../../../api/customGraphql.service';

@Component({
  selector: 'app-details-financial-strength-ratio',
  templateUrl: './details-financial-strength-ratio.component.html',
  styleUrls: ['./details-financial-strength-ratio.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsFinancialStrengthRatioComponent implements OnInit {
  @Input() stockDetails: StockDetails;

  constructor() { }

  ngOnInit() {}

}
