import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {EarningsCalendar} from '../../shared/models/chartDataModel';
import {SearchDataApiService} from '../../api/search-data-api.service';
import {NewsArticle} from '../../features/stock-data-feature/model/newsModel';
import {ModalController} from '@ionic/angular';
import {WatchlistPickerModalContainerComponent} from '../../features/stock-watchlist-feature/entry-components/watchlist-picker-modal-container/watchlist-picker-modal-container.component';

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


}
