import {Component, Input, OnInit} from '@angular/core';
import {PerShare} from '../../../model/stockDetails';

@Component({
  selector: 'app-details-per-share-card',
  templateUrl: './details-per-share-card.component.html',
  styleUrls: ['./details-per-share-card.component.scss'],
})
export class DetailsPerShareCardComponent implements OnInit {
  @Input() perShare: PerShare;

  constructor() { }

  ngOnInit() {}

}
