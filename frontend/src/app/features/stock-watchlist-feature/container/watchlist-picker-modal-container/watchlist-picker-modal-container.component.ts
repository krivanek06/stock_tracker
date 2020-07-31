import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ModalController, NavParams} from '@ionic/angular';
import {
    AddStockIntoWatchlistGQL,
    CreateStockWatchlistGQL, UserStcokWatchlistsQuery,
    UserStcokWatchlistsGQL, UserStcokWatchlistsDocument,
} from '../../../../core/services/private/watchlistGraphql.service';
import {map, tap} from 'rxjs/operators';
import {StockWatchlist, StockWatchlistIdentifier} from '../../model/tableModel';
import gql from 'graphql-tag';
import {WatchlistService} from '../../../../core/services/public/watchlist.service';

@Component({
    selector: 'app-watchlist-picker-modal-container',
    templateUrl: './watchlist-picker-modal-container.component.html',
    styleUrls: ['./watchlist-picker-modal-container.component.scss']
})
export class WatchlistPickerModalContainerComponent implements OnInit {
    inputForm: FormGroup;
    symbol: string;
    showForm = false;

    private DELETE_THIS_LATER = '7eYTErOxXugeHg4JHLS1L5ZKosK2';

    constructor(private formBuilder: FormBuilder,
                private navParams: NavParams,
                private watchlistService: WatchlistService,
                private modalController: ModalController) {
        this.symbol = this.navParams.get('symbol');
    }

    stockWatchListTable$ = this.watchlistService.getUserStockWatchlists(this.DELETE_THIS_LATER);


    ngOnInit(): void {
        this.stockWatchListTable$.subscribe(console.log); // delete later
        this.initFormGroup();
    }


    dismissModal() {
        this.modalController.dismiss();
    }

    addSymbolToWatchlist(watchListId: string, documentId: string) {
        const identifier: StockWatchlistIdentifier = {
            userId: this.DELETE_THIS_LATER,
            stockName: this.symbol,
            documentId,
            id: watchListId
        };
        this.watchlistService.addSymbolToWatchlist(identifier)
            .subscribe(res => {
                console.log(res);
            });
    }


    createWatchList() {
        if (this.inputForm.invalid) {
            console.log('invalid form');
            return;
        }

        this.watchlistService.createWatchList({userId: this.DELETE_THIS_LATER, id: this.watchlistName.value})
            .subscribe(res => {
                console.log(res);
            });


        this.initFormGroup();
    }


    initFormGroup() {
        this.inputForm = this.formBuilder.group({
            watchlistName: ['', [
                Validators.required,
                Validators.maxLength(20)
            ]]
        });
    }

    toggleShowFormButton() {
        this.showForm = !this.showForm;
        this.initFormGroup();
    }


    get watchlistName() {
        return this.inputForm.get('watchlistName');
    }

}
