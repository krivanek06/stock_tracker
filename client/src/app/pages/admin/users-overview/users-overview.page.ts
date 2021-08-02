import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {componentDestroyed, GraphqlAdminService, StAdminMainInformations} from '@core';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-users-overview',
    templateUrl: './users-overview.page.html',
    styleUrls: ['./users-overview.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersOverviewPage implements OnInit, OnDestroy {

    adminMainInformations: StAdminMainInformations;

    data: number[][] = [];

    constructor(private graphqlAdminService: GraphqlAdminService,
                private cd: ChangeDetectorRef) {
    }

    ngOnDestroy(): void {

    }

    ngOnInit() {
        this.initAdminMainInformations();
    }

    private initAdminMainInformations() {
        this.graphqlAdminService.queryAdminMainInformations().pipe(
            takeUntil(componentDestroyed(this))
        ).subscribe(res => {
            this.data = res.usersWeeklyRegistrated.map(series => [series.timestamp, series.data]);
            this.adminMainInformations = res;
            this.cd.detectChanges();
        });
    }

}
