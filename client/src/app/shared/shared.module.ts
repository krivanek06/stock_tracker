import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {RouterModule} from '@angular/router';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NgxAuthFirebaseUIModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  exports: [
    NgxAuthFirebaseUIModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
  ]
})
export class SharedModule { }
