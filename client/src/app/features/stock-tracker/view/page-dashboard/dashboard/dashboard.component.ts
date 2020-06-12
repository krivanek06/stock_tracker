import {Component, OnInit} from '@angular/core';
import {StockApiService} from '../../../api/stock-api.service';
import {combineLatest, from, Observable, of} from 'rxjs';
import {IChartData} from '../../../model/chartModel';
import {TopStockTableData} from '../../../model/tableModel';
import {MarketNews} from '../../../model/newsModel';
import {FirebaseApiService} from '../../../../../core/api/firebase-api.service';
import {Store} from '@ngrx/store';
import {AppState} from '../../../../../core/model/appState';
import {getUser} from '../../../../../core/store/auth/auth.action';
import {switchMap, tap, withLatestFrom} from 'rxjs/operators';
import {user} from '../../../../../core/store/auth/auth.reducer';
import {getUserWatchLists} from '../../../store/stockWatchlist.action';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  articles$: Observable<MarketNews>;

  constructor(private stockAPI: StockApiService,
              private store: Store<AppState>,
              private firebaseApiService: FirebaseApiService) {
  }

  ngOnInit(): void {
    this.articles$ = this.stockAPI.getMarketNew();
    // this.firebaseApiService.getUserWatchLists('7eYTErOxXugeHg4JHLS1L5ZKosK2').valueChanges().subscribe(x => console.log('x', x));
    this.store.dispatch(getUserWatchLists());

  }

}
