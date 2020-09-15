import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-detials-financial-strength-ratio-card',
  templateUrl: './detials-financial-strength-ratio-card.component.html',
  styleUrls: ['./detials-financial-strength-ratio-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetialsFinancialStrengthRatioCardComponent implements OnInit {
  // @Input() financialStrengthRatio: FinancialStrengthRatio;

  constructor() { }

  ngOnInit() {}

}
