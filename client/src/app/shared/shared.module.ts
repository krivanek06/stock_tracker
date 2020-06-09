import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {RouterModule} from '@angular/router';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
  ],
  imports: [
    CommonModule,
    NgxAuthFirebaseUIModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule
  ],
  exports: [
    NgxAuthFirebaseUIModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule,
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireStorageModule,
    ConfirmDialogComponent
  ],
  entryComponents: [ConfirmDialogComponent],
})
export class SharedModule { }
