import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {BasicInfo, OverView} from '../../../model/stockDetails';
import {PriceRangeData} from '../../../../../shared/models/chartModel';

@Component({
    selector: 'app-details-overview-card',
    templateUrl: './details-overview-card.component.html',
    styleUrls: ['./details-overview-card.component.scss'],
})
export class DetailsOverviewCardComponent implements OnInit {
    @Input() overview: OverView;
    @Input() basicInfo: BasicInfo;

    @Output() buyEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Output() sellEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Output() favouritesEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Output() showSummaryEmitter: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }


    ngOnInit() {
        console.log(this.overview);
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
