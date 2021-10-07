import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StfmStockNew } from '@core';
import { BREAK_POINTS } from '@shared';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
	selector: 'app-market-stock-news',
	templateUrl: './market-stock-news.component.html',
	styleUrls: ['./market-stock-news.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketStockNewsComponent implements OnInit {
	@Input() stockArticle: StfmStockNew;
	isSMDownScreen$: Observable<boolean>;

	constructor(private breakpointObserver: BreakpointObserver) {}

	ngOnInit() {
		this.isSMDownScreen$ = this.breakpointObserver.observe([BREAK_POINTS.SM_DOWN]).pipe(map((x) => x.matches));
	}
}
