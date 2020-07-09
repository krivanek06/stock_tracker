import { Component, OnInit, Input } from '@angular/core';
import { Earnings } from '../../model/symbolModel';

@Component({
  selector: 'app-earnings-card',
  templateUrl: './earnings-card.component.html',
  styleUrls: ['./earnings-card.component.scss'],
})
export class EarningsCardComponent implements OnInit {
  @Input() earnings: Earnings[];
  constructor() { }

  ngOnInit() {}

}
