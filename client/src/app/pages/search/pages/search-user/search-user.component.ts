import {Component, OnInit} from '@angular/core';
import {StUserPartialInformation} from '../../../../api/customGraphql.service';

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

    showUserInformation(userPartialInformation: StUserPartialInformation) {
        console.log('showUserInformation', userPartialInformation);
    }
}
