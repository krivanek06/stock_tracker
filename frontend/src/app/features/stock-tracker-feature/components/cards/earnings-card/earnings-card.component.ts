import { Component, OnInit, Input } from '@angular/core';
import { EarningsCalendar } from '../../../model/earningsCalendarModel';

@Component({
  selector: 'app-earnings-card',
  templateUrl: './earnings-card.component.html',
  styleUrls: ['./earnings-card.component.scss'],
})
export class EarningsCardComponent implements OnInit {
  @Input() earnings: EarningsCalendar[];
  constructor() { }

  ngOnInit() {}

}
