import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-income-statement-card',
  templateUrl: './details-income-statement-card.component.html',
  styleUrls: ['./details-income-statement-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsIncomeStatementCardComponent implements OnInit {
  @Input() incomeStatement: any;

  constructor() { }

  ngOnInit() {}

}
