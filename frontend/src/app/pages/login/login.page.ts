import { Component, OnInit } from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '@capacitor/core';
import * as authAction from '../../core/store/auth/auth.action';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

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
