import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {componentDestroyed, GraphqlAdminService, StUserRegistrationDoc} from '@core';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-users-overview',
    templateUrl: './users-overview.page.html',
    styleUrls: ['./users-overview.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class UsersOverviewPage implements OnInit, OnDestroy {

    userRegistrationDoc: StUserRegistrationDoc;

    data: number[][] = [];

    constructor(private graphqlAdminService: GraphqlAdminService,
                private cd: ChangeDetectorRef) {
    }

    ngOnDestroy(): void {

    }

    ngOnInit() {
        this.initUserRegistrationSubscription();
    }

    private initUserRegistrationSubscription() {
        this.graphqlAdminService.queryUsersRegistration().pipe(
            takeUntil(componentDestroyed(this))
        ).subscribe(res => {
            this.data = res.weeklyRegistratedUsers.map(series => [series.timestamp, series.data]);
            this.userRegistrationDoc = res;
            this.cd.detectChanges();
        });
    }

}
