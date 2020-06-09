import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './core/model/appState';
import { getUser } from './core/store/auth/auth.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.store.subscribe(console.log);
    this.store.dispatch(getUser());
  }
}
