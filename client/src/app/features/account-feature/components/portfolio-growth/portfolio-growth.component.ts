import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-growth',
  templateUrl: './portfolio-growth.component.html',
  styleUrls: ['./portfolio-growth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioGrowthComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
