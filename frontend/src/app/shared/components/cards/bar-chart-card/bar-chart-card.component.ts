import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-bar-chart-card',
  templateUrl: './bar-chart-card.component.html',
  styleUrls: ['./bar-chart-card.component.scss'],
})
export class BarChartCardComponent implements OnInit {
  @Input() chartTitle: string;
  @Input() data: any[];
  @Input() heightPx = 350;
  constructor() { }

  ngOnInit() {}

}
