import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StGroupIdentificationDataFragment } from '@core';
import { SEARCH_PAGE_ENUM } from '../../models/pages.model';

@Component({
	selector: 'app-search-group',
	templateUrl: './search-group.component.html',
	styleUrls: ['./search-group.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchGroupComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit() {}

	showGroupInformation(groupPartialData: StGroupIdentificationDataFragment) {
		console.log('groupPartialData', groupPartialData);
		this.router.navigate([`menu/search/${SEARCH_PAGE_ENUM.GROUP}/${groupPartialData.id}`]);
	}
}
