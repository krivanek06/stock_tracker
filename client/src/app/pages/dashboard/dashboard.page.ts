import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {EarningsCalendar} from '../../shared/models/chartDataModel';
import {SearchDataApiService} from '../../api/search-data-api.service';
import {NewsArticle} from '../../features/stock-data-feature/model/newsModel';
import {ModalController} from '@ionic/angular';
import {WatchlistPickerModalContainerComponent} from '../../features/stock-watchlist-feature/entry-components/watchlist-picker-modal-container/watchlist-picker-modal-container.component';
import {AuthFeatureService} from '../../features/auth-feature/services/auth-feature.service';
import {StPortfolio, StUserPublicData, Summary} from '../../api/customGraphql.service';
import {takeUntil} from 'rxjs/operators';
import {ComponentBase} from '../../shared/utils/component-base/component.base';
import {fakeDataTransactionTable, getFakeTransactionTable} from '../../features/trading-feature/models/trading.fakeData';
import {ChartType} from '../../shared/models/sharedModel';
import {HoldingsTableEnum} from '../../features/trading-feature/components/holdings/holdings-table.enum';

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
