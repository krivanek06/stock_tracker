import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-groups',
	templateUrl: './groups.component.html',
	styleUrls: ['./groups.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupsComponent implements OnInit {
	constructor() {}

	ngOnInit() {}
}
