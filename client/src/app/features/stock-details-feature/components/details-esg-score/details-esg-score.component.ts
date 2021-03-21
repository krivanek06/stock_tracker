import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {EsgScores} from '@core';

@Component({
    selector: 'app-details-esg-score',
    templateUrl: './details-esg-score.component.html',
    styleUrls: ['./details-esg-score.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsEsgScoreComponent implements OnInit {
    @Input() esgScore: EsgScores;

    constructor() {
    }

    ngOnInit() {
    }

}
