import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StfmKeyExecutive} from '@core';

@Component({
    selector: 'app-details-key-executives',
    templateUrl: './details-key-executives.component.html',
    styleUrls: ['./details-key-executives.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsKeyExecutivesComponent implements OnInit {
    @Input() keyExecutives: StfmKeyExecutive[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
