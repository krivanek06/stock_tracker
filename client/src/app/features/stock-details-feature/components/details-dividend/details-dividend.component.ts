import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {QueryStockDetailsQuery} from '../../../../api/customGraphql.service';

@Component({
  selector: 'app-details-dividend',
  templateUrl: './details-dividend.component.html',
  styleUrls: ['./details-dividend.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsDividendComponent implements OnInit {
  @Input() stockDetails: QueryStockDetailsQuery;

  constructor() { }

  ngOnInit() {}

}
