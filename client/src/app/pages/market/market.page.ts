import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { Router } from '@angular/router';
import { NameValueContainer } from '@shared';
import { MARKET_PAGE_PATH } from './market.model';

@Component({
	selector: 'app-market',
	templateUrl: './market.page.html',
	styleUrls: ['./market.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MarketPage implements OnInit {
	MARKET_PAGE_PATH = MARKET_PAGE_PATH;
	selectedPath = MARKET_PAGE_PATH[0].value;

	constructor(private router: Router) {}

	ngOnInit() {}

	changePath(path: NameValueContainer): void {
		this.selectedPath = path.value;
		this.router.navigateByUrl(`menu/market/${path.value}`);
	}

	selectOption(event: MatSelectChange): void {
		const path = event.source.value as NameValueContainer;
		this.changePath(path);
	}
}
