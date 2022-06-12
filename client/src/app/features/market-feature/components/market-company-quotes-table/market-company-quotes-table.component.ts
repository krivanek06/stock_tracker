import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { StfmCompanyQuote } from '@core';
import { marketValueChange, SymbolIdentification } from '@shared';

@Component({
	selector: 'app-market-company-quotes-table',
	templateUrl: './market-company-quotes-table.component.html',
	styleUrls: ['./market-company-quotes-table.component.scss'],
	// changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [marketValueChange],
})
export class MarketCompanyQuotesTableComponent implements OnInit, OnChanges {
	@Output() itemClickedEmitter: EventEmitter<SymbolIdentification> = new EventEmitter<SymbolIdentification>();

	@Input() stfmCompanyQuotes?: StfmCompanyQuote[] | null = [];
	@Input() skeletonLength = 10;
	@Input() showImage: boolean = true;

	displayedColumns: string[] = ['symbol', 'price', 'daily', 'volume', 'marketCap', 'shares', 'peRatio', '52WeekRange'];
	dataSource!: MatTableDataSource<StfmCompanyQuote>;

	constructor() {}

	ngOnInit() {}

	itemClicked({ symbol, name }: StfmCompanyQuote) {
		this.itemClickedEmitter.emit({ symbol, name });
	}

	ngOnChanges(changes: SimpleChanges): void {
		if (this.stfmCompanyQuotes) {
			this.dataSource = new MatTableDataSource(this.stfmCompanyQuotes);
		}
	}
}
