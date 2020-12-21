import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HoldingsComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

}
