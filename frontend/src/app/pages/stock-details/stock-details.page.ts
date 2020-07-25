import {Component, OnDestroy, OnInit} from '@angular/core';
import {StockApiService} from '../../core/api/stock-api.service';
import {Observable, Subject} from 'rxjs';
import {StockArticle, StockDetails} from '../../features/stock-details-feature/model/stockDetails';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';

@Component({
    selector: 'app-stock-details',
    templateUrl: './stock-details.page.html',
    styleUrls: ['./stock-details.page.scss'],
})
export class StockDetailsPage implements OnInit, OnDestroy {
    private destroy$: Subject<boolean> = new Subject<boolean>();

    stockDetails: StockDetails;
    stockArticles: StockArticle[];

    constructor(private stockApiService: StockApiService,
                private route: ActivatedRoute) {
    }

    ngOnInit() {
        const symbol = this.route.snapshot.paramMap.get('symbol');


       /* const socket = new WebSocket('wss://ws.finnhub.io?token=brsrc5vrh5r9dg9d77pg'); // 'chat-1.0'

        socket.onopen = () => {
            console.log('open');
            socket.send(JSON.stringify({type: 'subscribe', symbol: 'BINANCE:BTCUSDT'}));
        };

        socket.onmessage = (e) => {
            console.log(e);
            console.log('message', JSON.parse(e.data));
            console.log('------------');
            // socket.close();
        };

        socket.onclose = () => {
            console.log('close');
        };*/


        this.stockApiService.getStockDetails(symbol).pipe(
            takeUntil(this.destroy$)
        ).subscribe(res => {
            this.stockDetails = res;
            console.log(this.stockDetails);
        });
    }

    ngOnDestroy() {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    }

}
