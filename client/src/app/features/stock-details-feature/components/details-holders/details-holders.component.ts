import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-details-holders',
	templateUrl: './details-holders.component.html',
	styleUrls: ['./details-holders.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsHoldersComponent implements OnInit {
	@Input() holders: any[] = []; // StfmHolder[] | StfmHolderWithWeight[]
	@Input() currentSharePrice: number;
	@Input() outstandingShares: number;
	@Input() showWeight: boolean;

	constructor() {}

	ngOnInit() {}
}
