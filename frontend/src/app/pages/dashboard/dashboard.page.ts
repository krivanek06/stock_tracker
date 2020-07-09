import { Component, OnInit } from "@angular/core";
import { getUserWatchLists } from "../../features/stock-tracker/store/stockWatchList/stockWatchList.action";
import { Observable } from "rxjs";
import { NewsArticle } from "../../features/stock-tracker/model/newsModel";
import { StockApiService } from "../../features/stock-tracker/endpoints/stock-api.service";
import { Store } from "@ngrx/store";
import { AppState } from "../../core/model/appState";
import { FirebaseApiService } from "../../core/api/firebase-api.service";
import { Earnings } from "src/app/features/stock-tracker/model/symbolModel";
import { TimelineChartData } from "src/app/shared/model/chartModel";
import {TopStockTableData, TopTableData} from '../../features/stock-tracker/model/tableModel';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {

  earnings$: Observable<Earnings[]>;

  constructor(
    private stockAPI: StockApiService,
    private store: Store<AppState>,
    private firebaseApiService: FirebaseApiService
  ) {}

  ngOnInit(): void {

    this.earnings$ = this.stockAPI.getEarningsCalendar();
    // this.firebaseApiService.getUserWatchLists('7eYTErOxXugeHg4JHLS1L5ZKosK2').valueChanges().subscribe(x => console.log('x', x));
    this.store.dispatch(getUserWatchLists());

  }
}
