import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgxAuthFirebaseUIModule } from "ngx-auth-firebaseui";
import { RouterModule } from "@angular/router";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { MaterialModule } from "../material.module";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AngularFireStorageModule } from "@angular/fire/storage";
import { ConfirmDialogComponent } from "./components/presentation/confirm-dialog/confirm-dialog.component";
import { LoaderSpinnerComponent } from "./components/presentation/loader-spinner/loader-spinner.component";
import { IonicModule } from "@ionic/angular";
import { HighchartsChartModule } from "highcharts-angular";
import { DefaultImgDirective } from './directive/default-img.directive';
import {FinancialChartTimelineButtonsComponent} from './components/financial-chart-timeline-buttons/financial-chart-timeline-buttons.component';
import {FinancialChartComponent} from './components/financial-chart/financial-chart.component';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    LoaderSpinnerComponent,
    DefaultImgDirective,
    FinancialChartTimelineButtonsComponent,
    FinancialChartComponent
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
    HighchartsChartModule,
    IonicModule,
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
    IonicModule,
    HighchartsChartModule,
    ConfirmDialogComponent,
    LoaderSpinnerComponent,
    DefaultImgDirective,
    FinancialChartTimelineButtonsComponent,
    FinancialChartComponent
  ],
  entryComponents: [ConfirmDialogComponent],
})
export class SharedModule {}
