import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { SEARCH_PAGE_ENUM } from './models/pages.model';

@Component({
	selector: 'app-search',
	templateUrl: './search.page.html',
	styleUrls: ['./search.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage implements OnInit {
	segmentValue = SEARCH_PAGE_ENUM.STOCK;
	SEARCH_PAGE = SEARCH_PAGE_ENUM;
	showSearchBar$: Observable<boolean>;

	constructor(private router: Router) {}

	ngOnInit() {
		console.log('segmentValue', this.segmentValue);
		this.watchSelectedSearchType();
	}

	segmentChanged(segment: CustomEvent) {
		this.segmentValue = segment.detail.value;
		// this.router.navigateByUrl(`menu/search/${this.segmentValue}`);
	}

	// if url > menu/search/stock/details then hide ion-segment
	private watchSelectedSearchType() {
		this.showSearchBar$ = this.router.events.pipe(
			filter((event) => event instanceof NavigationEnd),
			map((data: NavigationEnd) => data.url),
			map((url) => url.split('/')),
			map((splittedUrl) => splittedUrl[3] !== SEARCH_PAGE_ENUM.STOCK_DETAILS)
		);
	}
}
