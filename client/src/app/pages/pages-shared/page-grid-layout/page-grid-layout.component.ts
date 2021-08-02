import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-page-grid-layout',
    templateUrl: './page-grid-layout.component.html',
    styleUrls: ['./page-grid-layout.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class PageGridLayoutComponent implements OnInit {
    @Input() pageIcon: string;
    @Input() pageName: string;

    constructor() {
    }

    ngOnInit() {
    }

}
