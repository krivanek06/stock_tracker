import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HallOfFamePages } from '@hall-of-fame';

@Component({
	selector: 'app-hall-of-fame',
	templateUrl: './hall-of-fame.page.html',
	styleUrls: ['./hall-of-fame.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HallOfFamePage implements OnInit {
	hallOfFamePages = HallOfFamePages;
	constructor(private router: Router) {}

	ngOnInit() {}

	segmentChanged(data: any) {
		this.router.navigateByUrl(`menu/hall-of-fame/${data.detail.value}`);
	}
}
