import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-details-per-share-card',
  templateUrl: './details-per-share-card.component.html',
  styleUrls: ['./details-per-share-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsPerShareCardComponent implements OnInit {
  // @Input() perShare: PerShare;

  constructor() { }

  ngOnInit() {}

}
