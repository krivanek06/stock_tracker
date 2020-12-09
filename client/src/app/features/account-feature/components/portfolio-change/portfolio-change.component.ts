import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-portfolio-change',
  templateUrl: './portfolio-change.component.html',
  styleUrls: ['./portfolio-change.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PortfolioChangeComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
