import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {EarningsCalendar} from '../../shared/models/chartDataModel';
import {SearchDataApiService} from '../../api/search-data-api.service';
import {NewsArticle} from '../../features/stock-data-feature/model/newsModel';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.page.html',
    styleUrls: ['./dashboard.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardPage implements OnInit {

    earnings$: Observable<EarningsCalendar[]>;


    constructor(

    ) {
    }

    ngOnInit(): void {


    }


}
