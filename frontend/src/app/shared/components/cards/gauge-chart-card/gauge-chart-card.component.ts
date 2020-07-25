import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-gauge-chart-card',
  templateUrl: './gauge-chart-card.component.html',
  styleUrls: ['./gauge-chart-card.component.scss'],
})
export class GaugeChartCardComponent implements OnInit {
  @Input() startingPoint: number;
  @Input() endingPoint: number;
  @Input() currentPoint: number;
  @Input() displayValue: number;
  @Input() chartTitle: string;
  @Input() height = 350;
  @Input() cardHeight = 500;
  @Input() tooltipName = 'Current value';

  constructor() { }

  ngOnInit() {}

}