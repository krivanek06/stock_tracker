import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs";
import { StockApiService } from "../../api/stock-api.service";
import { EarningsCalendar } from "src/app/features/stock-tracker-feature/model/earningsCalendarModel";
@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.page.html",
  styleUrls: ["./dashboard.page.scss"],
})
export class DashboardPage implements OnInit {

  earnings$: Observable<EarningsCalendar[]>;

  constructor(
    private stockAPI: StockApiService
  ) {}

  ngOnInit(): void {

    this.earnings$ = this.stockAPI.getEarningsCalendar();
    // this.firebaseApiService.getUserWatchLists('7eYTErOxXugeHg4JHLS1L5ZKosK2').valueChanges().subscribe(x => console.log('x', x));
   // this.store.dispatch(getUserWatchLists());

  }
}
