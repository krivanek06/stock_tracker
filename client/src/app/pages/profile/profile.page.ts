import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfilePage implements OnInit {

    constructor() {
    }

    ngOnInit() {

    }

}
