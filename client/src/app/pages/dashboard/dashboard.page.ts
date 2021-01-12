import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {StPortfolio, StUserPublicData, Summary} from '../../api/customGraphql.service';
import {takeUntil} from 'rxjs/operators';
import {ComponentBase} from '../../shared/utils/component-base/component.base';
import {fakeDataTransactionTable, getFakeTransactionTable} from '../../features/trading-feature/models/trading.fakeData';
import {ChartType} from '../../shared/models/sharedModel';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage extends ComponentBase implements OnInit {
    user: StUserPublicData;
    holdingsSummaries: Summary[] = [];
    stPortfolioHistory: StPortfolio[] = [];
    fakeDataTransactionTable = getFakeTransactionTable();

    ChartType = ChartType;

    constructor(private authService: AuthFeatureService) {
        super();
    }

    ngOnInit(): void {
        this.initComponent();
    }

    private initComponent() {
        this.authService.getUser().pipe(takeUntil(this.destroy$)).subscribe(user => {
            this.user = user;
            this.holdingsSummaries = user?.holdings.map(x => x.summary);
        });

        this.stPortfolioHistory = this.fakeDataTransactionTable.map(x => x.portfolio);
    }
}
