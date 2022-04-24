import { ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { StfmBalanceSheetFragmentFragment } from '@core';
import { BalanceSheetDataContainer } from './../../models';

@Component({
	selector: 'app-details-statement-sheet',
	templateUrl: './details-statement-sheet.component.html',
	styleUrls: ['./details-statement-sheet.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DetailsStatementSheetComponent implements OnInit, OnChanges {
	@Input() sheetTitle!: string;
	//@Input() sheets?: StockDetailsSheetType[] | null = []; // StfmBalanceSheet[] | StfmIncomeStatement[] | StfmCashFlow[]
	@Input() balanceSheet?: StfmBalanceSheetFragmentFragment[] | null = [];

	// displayedColumns: string[] = ['symbol', 'price', 'daily', 'yearly', 'volume', 'marketCap', 'peRatio', 'recommend', '52WeekRange'];
	// dataSource!: MatTableDataSource<StockDetailsSheetType>;

	// sliderConfig = {
	// 	spaceBetween: 12,
	// 	centeredSlides: true,
	// 	slidesPerView: 1.15,
	// };

	BalanceSheetDataContainer = BalanceSheetDataContainer;

	constructor() {}

	ngOnInit() {}

	ngOnChanges(changes: SimpleChanges): void {
		// if(changes?.['balanceSheet']?.currentValue){
		// 	this.dataSource = new MatTableDataSource(this.balanceSheet || []);
		// }
	}
}
