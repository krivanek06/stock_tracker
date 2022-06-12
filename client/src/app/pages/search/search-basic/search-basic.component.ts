import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SEARCH_PAGE_ENUM } from '../models/pages.model';

@Component({
	selector: 'app-search-basic',
	templateUrl: './search-basic.component.html',
	styleUrls: ['./search-basic.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchBasicComponent implements OnInit {
	segmentValue = SEARCH_PAGE_ENUM.STOCK;
	SEARCH_PAGE = SEARCH_PAGE_ENUM;

	constructor(private router: Router) {}

	ngOnInit() {}

	segmentChanged(segment: any) {
		this.router.navigateByUrl(`menu/search/${segment.detail.value}`);
	}
}
