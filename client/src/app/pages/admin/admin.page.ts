import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.page.html',
    styleUrls: ['./admin.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AdminPage implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
