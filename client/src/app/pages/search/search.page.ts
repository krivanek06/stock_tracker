import {Component, OnInit} from '@angular/core';
import {SEARCH_PAGE} from './models/pages.model';
import {Router} from '@angular/router';

@Component({
    selector: 'app-search',
    templateUrl: './search.page.html',
    styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
    segmentValue = SEARCH_PAGE.SEARCH_STOCK;
    SEARCH_PAGE = SEARCH_PAGE;

    constructor(private router: Router) {
    }

    ngOnInit() {
    }

    segmentChanged(segment: CustomEvent) {
        this.segmentValue = segment.detail.value;
        this.router.navigate([`menu/search/${this.segmentValue}`]);
    }
}
