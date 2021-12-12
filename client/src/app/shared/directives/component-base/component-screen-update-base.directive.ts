import { ChangeDetectorRef, Directive, OnDestroy, OnInit, ViewRef } from '@angular/core';
import { componentDestroyed, FinnhubWebsocketService } from '@core';
import { first, takeUntil } from 'rxjs/operators';
import { DialogService } from '../../services';

@Directive()
export abstract class ComponentScreenUpdateBaseDirective implements OnInit, OnDestroy {
	interval: any;
	componentName?: string;

	updateIntervalMs = 1800;

	protected constructor(
		public cdr: ChangeDetectorRef,
		public finnhubWebsocketService: FinnhubWebsocketService,

		private componentNameBase: string
	) {
		this.componentName = componentNameBase;

		// show message that we are trying to connect on finnhub for component
		this.finnhubWebsocketService
			.isConnectionInitializedObs()
			.pipe(first((x) => !!x))
			.subscribe(() => {
				if (this.componentName) {
					DialogService.showNotificationBar('Wait for server connection to receive live data', 'notification', 5000);
				}
			});

		// show message that we are connected on finnhub
		this.finnhubWebsocketService
			.doesSubscriptionForComponentExists(this.componentName)
			.pipe(
				first((x) => !!x),
				takeUntil(componentDestroyed(this))
			)
			.subscribe(() => {
				if (this.componentName) {
					DialogService.showNotificationBar('Connection initialized');
				}
			});
	}

	ngOnInit(): void {
		this.updateScreen();
	}

	ngOnDestroy() {
		console.log(`Destroyed for component ${this.componentName}`);
		clearInterval(this.interval);
		this.finnhubWebsocketService.closeConnection(this.componentName);
		this.componentName = undefined;
	}

	private updateScreen(): void {
		// websockets update view
		this.interval = setInterval(() => {
			if (this.cdr && !(this.cdr as ViewRef).destroyed) {
				this.cdr.detectChanges();
			}
		}, this.updateIntervalMs);
	}
}
