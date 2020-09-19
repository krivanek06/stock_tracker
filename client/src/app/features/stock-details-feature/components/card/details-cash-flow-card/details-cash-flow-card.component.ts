import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-details-cash-flow-card',
  templateUrl: './details-cash-flow-card.component.html',
  styleUrls: ['./details-cash-flow-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsCashFlowCardComponent implements OnInit {
  @Input() cashflow: any;
  constructor() { }

  ngOnInit() {}

}
