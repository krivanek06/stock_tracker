import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-search',
	templateUrl: './search.page.html',
	styleUrls: ['./search.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SearchPage implements OnInit {
	constructor() {}

	ngOnInit() {}
}
