import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { GroupStorageService, StGroupAllData } from '@core';
import { ChartType } from '@shared';
import { Observable } from 'rxjs';

@Component({
	selector: 'app-group-details-stats',
	templateUrl: './group-details-stats.component.html',
	styleUrls: ['./group-details-stats.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupDetailsStatsComponent implements OnInit {
	groupAllData$: Observable<StGroupAllData>;
	ChartType = ChartType;

	constructor(private groupStorageService: GroupStorageService) {}

	ngOnInit() {
		this.groupAllData$ = this.groupStorageService.getActiveGroup();
	}
}
