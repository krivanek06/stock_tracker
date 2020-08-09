import { Component, OnDestroy, OnInit } from "@angular/core";
import { StockApiService } from "../../api/stock-api.service";
import { Observable, Subject } from "rxjs";
import {
  StockArticle,
  StockDetails,
} from "../../features/stock-details-feature/model/stockDetails";
import { ActivatedRoute } from "@angular/router";
import { takeUntil } from "rxjs/operators";
import { Apollo } from "apollo-angular";
@Component({
  selector: "app-stock-details",
  templateUrl: "./stock-details.page.html",
  styleUrls: ["./stock-details.page.scss"],
})
export class StockDetailsPage implements OnInit, OnDestroy {
  private destroy$: Subject<boolean> = new Subject<boolean>();

  stockDetails: StockDetails;
  stockArticles: StockArticle[];

  constructor(
    private stockApiService: StockApiService,
    private apollo: Apollo,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const symbol = this.route.snapshot.paramMap.get("symbol");

    this.stockApiService
      .getStockDetails(symbol)
      .pipe(takeUntil(this.destroy$))
      .subscribe((res) => {
        this.stockDetails = res;
        console.log(this.stockDetails);
      });
  }

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
