import { ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { componentDestroyed, FinnhubWebsocketService, Summary } from '@core';
import { ComponentScreenUpdateBaseDirective, marketValueChange } from '@shared';
import { filter, takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-details-stock-summary',
	templateUrl: './details-stock-summary.component.html',
	styleUrls: ['./details-stock-summary.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [marketValueChange],
})
export class DetailsStockSummaryComponent extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
	@Output() onReloadClickEmitter: EventEmitter<void> = new EventEmitter<void>();
	@Input() summary!: Summary;
	@Input() isAdmin: boolean | null = false;
	currentPrice?: number | null = null;

	constructor(public finnhubWebsocketService: FinnhubWebsocketService, public cd: ChangeDetectorRef) {
		super(cd, finnhubWebsocketService, 'StockSummaryContainerComponent');
	}

	ngOnInit() {
		super.ngOnInit();
		this.initWebsocketConnection();
		this.currentPrice = this.summary.marketPrice || undefined;
	}

	ngOnDestroy() {
		super.ngOnDestroy();
	}

	onReloadClick(): void {
		this.onReloadClickEmitter.emit();
	}

	private initWebsocketConnection() {
		this.finnhubWebsocketService.createSubscribeForSymbol(this.componentName, this.summary.symbol);
		this.finnhubWebsocketService
			.getSubscribedSymbolsResult()
			.pipe(
				filter((res) => res.s === this.summary.symbol),
				takeUntil(componentDestroyed(this))
			)
			.subscribe((res) => {
				this.currentPrice = res.p;
			});
	}
}
