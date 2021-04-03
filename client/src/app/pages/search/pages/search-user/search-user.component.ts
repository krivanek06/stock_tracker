import {Component, OnInit} from '@angular/core';
import {StUserPublicData} from '@core';

@Component({
    selector: 'app-search-user',
    templateUrl: './search-user.component.html',
    styleUrls: ['./search-user.component.scss'],
})
export class SearchUserComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

    showUserInformation(userPartialInformation: StUserPublicData) {
        console.log('showUserInformation', userPartialInformation);
    }
}
