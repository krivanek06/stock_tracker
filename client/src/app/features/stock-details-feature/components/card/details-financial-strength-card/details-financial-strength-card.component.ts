import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-financial-strength-card',
  templateUrl: './details-financial-strength-card.component.html',
  styleUrls: ['./details-financial-strength-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsFinancialStrengthCardComponent implements OnInit {
  // @Input() financialStrength: FinancialStrength;

  constructor() { }

  ngOnInit() {}

}
