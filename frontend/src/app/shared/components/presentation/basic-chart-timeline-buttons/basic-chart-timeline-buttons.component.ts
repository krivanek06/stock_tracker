import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-basic-chart-timeline-buttons',
  templateUrl: './basic-chart-timeline-buttons.component.html',
  styleUrls: ['./basic-chart-timeline-buttons.component.scss']
})
export class BasicChartTimelineButtonsComponent implements OnInit {
  timeline = '1d';

  @Output() clickedEmitter: EventEmitter<string> = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
  }

  click(timeline: string) {
    this.timeline = timeline;
    this.clickedEmitter.emit(timeline);
  }

}
