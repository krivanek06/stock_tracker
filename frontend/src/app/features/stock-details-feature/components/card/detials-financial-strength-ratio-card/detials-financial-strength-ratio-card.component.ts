import {Component, Input, OnInit} from '@angular/core';
import {FinancialStrengthRatio} from '../../../model/stockDetails';

@Component({
  selector: 'app-detials-financial-strength-ratio-card',
  templateUrl: './detials-financial-strength-ratio-card.component.html',
  styleUrls: ['./detials-financial-strength-ratio-card.component.scss'],
})
export class DetialsFinancialStrengthRatioCardComponent implements OnInit {
  @Input() financialStrengthRatio: FinancialStrengthRatio;

  constructor() { }

  ngOnInit() {}

}
