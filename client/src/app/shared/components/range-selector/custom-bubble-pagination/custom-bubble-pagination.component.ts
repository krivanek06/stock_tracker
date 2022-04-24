import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { Required } from '../../..//decorators';

@Component({
	selector: 'app-custom-bubble-pagination',
	templateUrl: './custom-bubble-pagination.component.html',
	styleUrls: ['./custom-bubble-pagination.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomBubblePaginationComponent implements OnInit, OnChanges {
	@Output() changePageEmitter: EventEmitter<number> = new EventEmitter<number>();

	/*
	 * how many data are total to be displayed
	 */
	@Required
	@Input()
	totalData!: number;

	/*
	 * how many data should be displayed in one page
	 */
	@Required
	@Input()
	paginationLength!: number;

	@Input() currentPage = 0;
	renderingBubbles!: number;
	renderingBubblesHelper: number[] = [];

	get previousSliceIndex(): number {
		return this.currentPage === 0 ? 0 : this.currentPage === 1 ? this.currentPage - 1 : this.currentPage - 2;
	}

	constructor() {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes?.['totalData']?.currentValue) {
			this.renderingBubbles = Math.ceil(this.totalData / this.paginationLength);
			this.renderingBubblesHelper = Array.from(Array(this.renderingBubbles).keys());
		}
	}

	ngOnInit(): void {}

	onPageChange(index: number): void {
		this.changePageEmitter.emit(index);
		this.currentPage = index;
	}
}
