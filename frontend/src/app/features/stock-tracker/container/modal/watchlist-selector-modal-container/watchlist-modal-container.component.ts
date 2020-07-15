import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import {ChartDataIdentification} from '../../../../../shared/models/chartModel';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {StockTrackerState} from '../../../store';
import {StockWatchListState} from '../../../store/stockWatchList/stockWatchList.reducer';

import * as fromStockWatchList from '../../../store/stockWatchList/stockWatchList.reducer';
import * as stockWatchListAction from '../../../store/stockWatchList/stockWatchList.action';
import {StockWatchListTable} from '../../../model/tableModel';
import {StockApiService} from '../../../endpoints/stock-api.service';
import {ModalController, NavParams} from '@ionic/angular';


@Component({
    selector: 'app-watchlist-modal-container',
    templateUrl: './watchlist-modal-container.component.html',
    styleUrls: ['./watchlist-modal-container.component.scss']
})
export class WatchlistModalContainerComponent implements OnInit {
    stockWatchListTable$: Observable<StockWatchListTable[]> = this.store.select(fromStockWatchList.getAllWatchLists);

    inputForm: FormGroup;
    chartDataIdentification: ChartDataIdentification;

    constructor(private formBuilder: FormBuilder,
                private store: Store<StockTrackerState>,
                private navParams: NavParams,
                private viewCtrl: ModalController) {
        this.chartDataIdentification = this.navParams.get('chartDataIdentification');
    }

    ngOnInit(): void {
    }


  dismissModal() {
    this.viewCtrl.dismiss();
  }

    addSymbolToWatchlist(watchListId: string) {
        this.store.dispatch(stockWatchListAction.addSymbolToWatchlist({
            watchListId,
            symbol: this.chartDataIdentification.symbol,
            name: this.chartDataIdentification.name
        }));
    }

    createWatchList() {
        if (this.inputForm.invalid) {
            return;
        }

        this.store.dispatch(stockWatchListAction.createWatchList({name: this.watchlistName.value}));
        this.removeInput();
    }

    removeInput() {
        this.inputForm = undefined;
    }

    addInput() {
        this.inputForm = this.formBuilder.group({
            watchlistName: ['', [
                Validators.required,
                Validators.maxLength(20)
            ]]
        });
    }


    get watchlistName() {
        return this.inputForm.get('watchlistName');
    }

}
