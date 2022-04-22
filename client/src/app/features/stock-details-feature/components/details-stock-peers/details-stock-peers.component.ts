import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StfmCompanyQuote } from '@core';
import { marketValueChange } from '@shared';

@Component({
	selector: 'app-details-stock-peers',
	templateUrl: './details-stock-peers.component.html',
	styleUrls: ['./details-stock-peers.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [marketValueChange],
})
export class DetailsStockPeersComponent implements OnInit, OnChanges {
	@Output() clickedPeerEmitter: EventEmitter<StfmCompanyQuote> = new EventEmitter<StfmCompanyQuote>();
	@Input() sectorPeers: StfmCompanyQuote[] = [];

	displayedColumns: string[] = ['symbol', 'price', 'marketCap', 'peRatio', '52WeekRange'];
	dataSource!: MatTableDataSource<StfmCompanyQuote>;

	constructor() {}
	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.sectorPeers && this.sectorPeers.length > 0) {
			this.dataSource = new MatTableDataSource(this.sectorPeers);
		}
	}

	itemClicked(peer: StfmCompanyQuote) {
		this.clickedPeerEmitter.emit(peer);
	}
}
