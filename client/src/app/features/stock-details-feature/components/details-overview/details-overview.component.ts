import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {QueryStockDetailsQuery} from "../../../../api/customGraphql.service";

@Component({
    selector: 'app-details-overview',
    templateUrl: './details-overview.component.html',
    styleUrls: ['./details-overview.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsOverviewComponent implements OnInit {
    @Input() stockDetails: QueryStockDetailsQuery;

    @Output() favouritesEmitter: EventEmitter<any> = new EventEmitter<any>();
    @Output() showSummaryEmitter: EventEmitter<any> = new EventEmitter<any>();

    constructor() {
    }


    ngOnInit() {

    }

    addToFavourites() {
        this.favouritesEmitter.emit();
    }

    clickedCompanyImage() {
        this.showSummaryEmitter.emit();
    }

}
