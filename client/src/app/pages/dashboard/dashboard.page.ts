import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {EarningsCalendar} from '../../shared/models/chartDataModel';
import {SearchDataApiService} from '../../api/search-data-api.service';
import {NewsArticle} from '../../features/stock-data-feature/model/newsModel';
import {ModalController} from '@ionic/angular';
import {WatchlistPickerModalContainerComponent} from '../../features/stock-watchlist-feature/containers/watchlist-picker-modal-container/watchlist-picker-modal-container.component';
import {GroupManagementModalComponent} from '../../features/group-feature/containers/modal/group-management-modal/group-management-modal.component';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage implements OnInit {

    earnings$: Observable<EarningsCalendar[]>;


    constructor(
        private modalController: ModalController
    ) {
    }

    ngOnInit(): void {


    }

    async showWatchlist() {
        const modal = await this.modalController.create({
            component: GroupManagementModalComponent,
            //componentProps: {symbol: this.stockDetails.queryStockDetails.summary.symbol},
            cssClass: 'custom-modal'
        });
        return await modal.present();
    }


}
