import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {QueryStockDetailsQuery} from '../../../../api/customGraphql.service';

@Component({
  selector: 'app-details-per-share',
  templateUrl: './details-per-share.component.html',
  styleUrls: ['./details-per-share.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPerShareComponent implements OnInit {
  @Input() stockDetails: QueryStockDetailsQuery;

  constructor() { }

  ngOnInit() {}

}
