import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {QueryStockDetailsQuery, StockDetails} from '../../../../api/customGraphql.service';

@Component({
  selector: 'app-details-dividend',
  templateUrl: './details-dividend.component.html',
  styleUrls: ['./details-dividend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsDividendComponent implements OnInit {
  @Input() stockDetails: StockDetails;

  constructor() { }

  ngOnInit() {}

}
