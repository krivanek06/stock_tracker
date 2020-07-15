import { Component, OnInit } from "@angular/core";
import { WatchlistModalContainerComponent } from "../modal/watchlist-selector-modal-container/watchlist-modal-container.component";
import { MatDialog } from "@angular/material/dialog";
import { Store } from "@ngrx/store";
import { StockTrackerState } from "../../store";
import { Observable } from "rxjs";
import { StockWatchListTable } from "../../model/tableModel";

import * as fromStockWatchList from "../../store/stockWatchList/stockWatchList.reducer";
import { ChartDataIdentification } from "../../../../shared/models/chartModel";

@Component({
  selector: "app-watchlist-tables-container",
  templateUrl: "./watchlist-tables-container.component.html",
  styleUrls: ["./watchlist-tables-container.component.scss"],
})
export class WatchlistTablesContainerComponent implements OnInit {
  watchLists$: Observable<StockWatchListTable[]> = this.store.select(
    fromStockWatchList.getAllWatchLists
  );

  constructor(
    private store: Store<StockTrackerState>,
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {}

  showChart(chartDataIdentification: ChartDataIdentification) {
    /* this.dialog.open(TimelineChartContainerDialogComponent, {
      width: "70%",
      data: {
        symbol: chartDataIdentification.symbol,
        name: chartDataIdentification.name,
      },
    });*/
  }

  showWatchlist(chartDataIdentification: ChartDataIdentification) {
    this.dialog.open(WatchlistModalContainerComponent, {
      width: "70%",
      data: {
        symbol: chartDataIdentification.symbol,
        name: chartDataIdentification.name,
      },
    });
  }
}
