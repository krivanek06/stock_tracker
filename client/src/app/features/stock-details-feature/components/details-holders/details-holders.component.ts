import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
	selector: 'app-details-holders',
	templateUrl: './details-holders.component.html',
	styleUrls: ['./details-holders.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsHoldersComponent implements OnInit, OnChanges {
	@Input() holders: any[] = []; // StfmHolder[] | StfmHolderWithWeight[]
	@Input() currentSharePrice!: number;
	@Input() outstandingShares?: number | null;
	@Input() showWeight: boolean = false;

	displayedColumns: string[] = ['name', 'value', 'heldShares', 'change'];
	dataSource!: MatTableDataSource<any>;

	constructor() {}

	ngOnInit() {
		if (this.showWeight) {
			this.displayedColumns = ['name', 'value', 'heldShares', 'weight', 'change'];
		}
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.holders && this.holders.length > 0) {
			this.dataSource = new MatTableDataSource(this.holders);
		}
	}
}
