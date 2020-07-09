import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-financial-chart-timeline-buttons',
  templateUrl: './financial-chart-timeline-buttons.component.html',
  styleUrls: ['./financial-chart-timeline-buttons.component.scss'],
})
export class FinancialChartTimelineButtonsComponent implements OnInit {
  @Output() selectedPeriodEmitter: EventEmitter<string> = new EventEmitter<string>();
  selectedPeriod = "1y";

  constructor() { }

  ngOnInit() {}

  loadIntervalData(period: string) {
    this.selectedPeriod = period;
    this.selectedPeriodEmitter.emit(this.selectedPeriod);
  }

}
