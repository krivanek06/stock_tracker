import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../../core/model/appState';
import {Observable} from 'rxjs';
import {IUser} from '../../../core/model/userModel';
import {user} from '../../../core/store/auth/auth.reducer';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    user$: Observable<IUser>;

    constructor(private store: Store<AppState>) {
    }

    ngOnInit() {
        this.user$ = this.store.select(user);
    }

}
