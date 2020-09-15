import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QueryStockDetailsQuery} from "../../../../../api/customGraphql.service";

@Component({
    selector: 'app-details-overview-card',
    templateUrl: './details-overview-card.component.html',
    styleUrls: ['./details-overview-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsOverviewCardComponent implements OnInit {
    @Input() stockDetails: QueryStockDetailsQuery;

    @Output() buyEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Output() sellEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Output() favouritesEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Output() showSummaryEmitter: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }


    ngOnInit() {

    }

    buySymbol() {
        this.buyEmitter.emit();
    }

    sellSymbol() {
        this.sellEmitter.emit();
    }

    addToFavourites() {
        this.favouritesEmitter.emit();
    }

    clickedCompanyImage() {
        this.showSummaryEmitter.emit();
    }

}
