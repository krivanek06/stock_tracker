import {Component, Input, OnInit} from '@angular/core';
import {FinancialStrength} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-financial-strength-card',
  templateUrl: './details-financial-strength-card.component.html',
  styleUrls: ['./details-financial-strength-card.component.scss'],
})
export class DetailsFinancialStrengthCardComponent implements OnInit {
  @Input() financialStrength: FinancialStrength;

  constructor() { }

  ngOnInit() {}

}
