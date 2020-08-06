import {ChangeDetectionStrategy, Component, EventEmitter, HostListener, Input, OnInit, Output} from '@angular/core';
import {ChartDataIdentification, DocumentIdentification} from '../../../../shared/models/chartModel';
import {StockWatchlistInformationFragment} from '../../../../core/services/private/watchlistGraphql.service';
import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
    selector: 'app-watchlist-table',
    templateUrl: './watchlist-table.component.html',
    styleUrls: ['./watchlist-table.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    /*animations: [
        trigger('marketValueChange', [
            state('transparent', style({
                backgroundColor: 'transparent'
            })),
            state('positive', style({
                backgroundColor: 'transparent'
            })),
            transition('* => positive',
                animate('1s ease-out', style({
                    backgroundColor: 'green',
                    opacity: 0.7
                }))
            ),
            transition('* => negative',
                animate('1s ease-out', style({
                    backgroundColor: 'red',
                    opacity: 0.7
                }))
            )
        ])
    ]*/
})
export class WatchlistTableComponent implements OnInit {
    editing = false;
    isMobile = false;

    @Input() stockWatchlist: StockWatchlistInformationFragment;

    @Output() showChartEmitter: EventEmitter<ChartDataIdentification> = new EventEmitter<ChartDataIdentification>();
    @Output() showDetailsEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Output() deleteSymbolEmitter: EventEmitter<DocumentIdentification> = new EventEmitter<DocumentIdentification>();
    @Output() deleteWatchlistEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Output() renameWatchlistEmitter: EventEmitter<DocumentIdentification> = new EventEmitter<DocumentIdentification>();

    constructor() {
    }

    ngOnInit(): void {
        this.isMobile = window.innerWidth <= 400;
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.isMobile = event.target.innerWidth <= 400;
    }


    toggleEdit() {
        this.editing = !this.editing;
    }

    showChart(name: string, symbol: string) {
        this.showChartEmitter.emit({name, symbol});
    }


    detailsClicked(symbol: string) {
        console.log(this.isMobile);
        // this.showDetailsEmitter.emit(symbol);
    }

    deleteSymbolFromWatchlist(symbol: string) {
        this.deleteSymbolEmitter.emit({documentId: this.stockWatchlist.id, additionalInfo: symbol});
    }

    deleteWatchlist() {
        this.deleteWatchlistEmitter.emit(this.stockWatchlist.id);
    }

    editWatchlistName(newWatchlistName: string) {
        this.renameWatchlistEmitter.emit({documentId: this.stockWatchlist.id, additionalInfo: newWatchlistName});
    }
}
