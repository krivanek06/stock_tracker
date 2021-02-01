import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {InstitutionOwnership} from '../../../../api/customGraphql.service';

@Component({
    selector: 'app-details-ownership',
    templateUrl: './details-ownership.component.html',
    styleUrls: ['./details-ownership.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DetailsOwnershipComponent implements OnInit {
    @Input() ownerships: InstitutionOwnership[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
