import {Component, Input, OnInit} from '@angular/core';
import {BasicInfo, OverView} from '../../../model/stockDetails';

@Component({
    selector: 'app-details-overview-card',
    templateUrl: './details-overview-card.component.html',
    styleUrls: ['./details-overview-card.component.scss'],
})
export class DetailsOverviewCardComponent implements OnInit {
    @Input() overview: OverView;
    @Input() basicInfo: BasicInfo;


    constructor() {
    }


    ngOnInit() {
        console.log(this.overview);
    }

}
