import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-line-chart-card',
  templateUrl: './line-chart-card.component.html',
  styleUrls: ['./line-chart-card.component.scss'],
})
export class LineChartCardComponent implements OnInit {
  @Input() chartTitle: string;
  @Input() data: any[];
  @Input() heightPx = 350;

  constructor() { }

  ngOnInit() {}

}
