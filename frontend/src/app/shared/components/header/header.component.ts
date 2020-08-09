import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {IUser} from '../../../features/auth-feature/model/userModel';
import {AuthFeatureService} from '../../../features/auth-feature/services/auth-feature.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    user$: Observable<IUser>;

    constructor(private authFeatureService: AuthFeatureService) {
    }

    ngOnInit() {
        this.user$ = this.authFeatureService.getUser();
    }

}
