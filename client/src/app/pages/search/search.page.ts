import {Component, OnInit} from '@angular/core';
import {SEARCH_PAGE_ENUM, SEARCH_PAGE_STOCK_ENUM} from './models/pages.model';
import {NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';
import {Observable, of} from 'rxjs';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    segmentValue = SEARCH_PAGE_ENUM.STOCK;
    SEARCH_PAGE = SEARCH_PAGE_ENUM;
    showSearchBar$: Observable<boolean>;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.watchSelectedSearchType();
    }

    segmentChanged(segment: CustomEvent) {
        this.segmentValue = segment.detail.value;
        this.router.navigate([`menu/search/${this.segmentValue}`]);
    }

    // if url > menu/search/stock/details then hide ion-segment
    private watchSelectedSearchType() {
        this.showSearchBar$ = this.router.events.pipe(
            filter(event => event instanceof NavigationEnd),
            map((data: NavigationEnd) => data.url),
            map(url => url.split('/')),
            map(splittedUrl =>
                splittedUrl[3] !== SEARCH_PAGE_ENUM.STOCK || splittedUrl[4] !== SEARCH_PAGE_STOCK_ENUM.DETAILS)
        );
    }
}
