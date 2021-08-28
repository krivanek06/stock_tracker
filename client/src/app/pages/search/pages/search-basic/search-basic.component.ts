import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { SEARCH_PAGE_ENUM } from './../../models/pages.model';

@Component({
	selector: 'app-search-basic',
	templateUrl: './search-basic.component.html',
	styleUrls: ['./search-basic.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBasicComponent implements OnInit {
	segmentValue = SEARCH_PAGE_ENUM.STOCK;
	SEARCH_PAGE = SEARCH_PAGE_ENUM;

	constructor() {}

	ngOnInit() {}

	segmentChanged(segment: CustomEvent) {
		this.segmentValue = segment.detail.value;
	}
}
