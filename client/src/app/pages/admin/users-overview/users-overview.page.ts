import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { componentDestroyed, GraphqlAdminService, StAdminMainInformationsFragmentFragment } from '@core';
import { Confirmable, WindowService } from '@shared';
import { takeUntil } from 'rxjs/operators';
import { DialogService } from './../../../shared/services/dialog.service';

@Component({
	selector: 'app-users-overview',
	templateUrl: './users-overview.page.html',
	styleUrls: ['./users-overview.page.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersOverviewPage implements OnInit, OnDestroy {
	adminMainInformations: StAdminMainInformationsFragmentFragment;

	data: number[][] = [];

	chartHeight: number;

	constructor(private graphqlAdminService: GraphqlAdminService, private cd: ChangeDetectorRef) {}

	ngOnDestroy(): void {}

	ngOnInit() {
		this.chartHeight = WindowService.getWindowHeightPrctInPx(25);
		this.initAdminMainInformations();
	}

	@Confirmable('Confirm before force reloading all stock details')
	forceReloadAllSymbols(): void {
		this.graphqlAdminService.setForceReloadStockDetails().subscribe(() => {
			DialogService.showNotificationBar('All stock have been set to reload');
		});
	}

	private initAdminMainInformations() {
		this.graphqlAdminService
			.queryAdminMainInformations()
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe((res) => {
				this.data = res.usersWeeklyRegistrated.map((series) => [series.timestamp, series.data]);
				this.adminMainInformations = res;
				this.cd.detectChanges();
			});
	}
}
