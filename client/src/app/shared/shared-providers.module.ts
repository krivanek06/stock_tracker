import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireStorageModule} from '@angular/fire/storage';
import {HighchartsChartModule} from 'highcharts-angular';
import {IonicModule} from '@ionic/angular';
import {TranslateModule} from '@ngx-translate/core';
import {DialogService} from './services';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        HighchartsChartModule,
        IonicModule,
        TranslateModule
    ],
    exports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        RouterModule,
        AngularFirestoreModule,
        AngularFireAuthModule,
        AngularFireStorageModule,
        HighchartsChartModule,
        IonicModule,
        TranslateModule
    ],
    providers: [
        DialogService
    ]
})
export class SharedProvidersModule {
    constructor(ionicDialogService: DialogService) {
      // ^^^ forces an instance to be created
    }
}
