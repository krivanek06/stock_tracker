import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../../model/appState';
import * as authAction from '../../store/auth/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private store: Store<AppState>) { }

  ngOnInit() {
  }

  log($event: any) {
    console.log('log' , $event);
  }

  login(){
    this.store.dispatch(authAction.getUser());
  }
}
