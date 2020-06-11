import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NgxAuthFirebaseUIModule} from 'ngx-auth-firebaseui';
import {RouterModule} from '@angular/router';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {MaterialModule} from '../material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {ConfirmDialogComponent} from './components/presentation/confirm-dialog/confirm-dialog.component';
import { NavigationComponent } from './components/smart/navigation/navigation.component';
import { ChartsModule } from 'ng2-charts';
import { BasicChartComponent } from './components/presentation/basic-chart/basic-chart.component';
import { BasicChartTimelineButtonsComponent } from './components/presentation/basic-chart-timeline-buttons/basic-chart-timeline-buttons.component';
import { LoaderSpinnerComponent } from './components/presentation/loader-spinner/loader-spinner.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    NavigationComponent,
    BasicChartComponent,
    BasicChartTimelineButtonsComponent,
    LoaderSpinnerComponent,
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
    AngularFireStorageModule,
    ChartsModule
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
    ChartsModule,

    ConfirmDialogComponent,
    NavigationComponent,
    BasicChartComponent,
    BasicChartTimelineButtonsComponent,
    LoaderSpinnerComponent
  ],
  entryComponents: [ConfirmDialogComponent],
})
export class SharedModule { }
