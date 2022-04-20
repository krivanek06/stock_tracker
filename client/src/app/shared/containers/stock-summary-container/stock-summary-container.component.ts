import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnDestroy, OnInit } from '@angular/core';
import { componentDestroyed, FinnhubWebsocketService, Summary } from '@core';
import { filter, takeUntil } from 'rxjs/operators';
import { marketValueChange } from '../../animations';
import { ComponentScreenUpdateBaseDirective } from '../../directives';

@Component({
	selector: 'app-stock-summary-container',
	templateUrl: './stock-summary-container.component.html',
	styleUrls: ['./stock-summary-container.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [marketValueChange],
})
export class StockSummaryContainerComponent extends ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
	@Input() summary!: Summary;
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
