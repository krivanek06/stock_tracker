import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-title-with-logo-item',
    templateUrl: './title-with-logo-item.component.html',
    styleUrls: ['./title-with-logo-item.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class TitleWithLogoItemComponent implements OnInit {
    @Input() logoUrl: string;
    @Input() name: string;

    constructor() {
    }

    ngOnInit() {
    }

}
