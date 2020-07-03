import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DefaultLayoutComponent} from './default-layout/default-layout.component';
import {SharedModule} from '../shared/shared.module';
import {IonicModule} from '@ionic/angular';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {LoggedInGuard} from 'ngx-auth-firebaseui';




@NgModule({
  declarations: [DefaultLayoutComponent],
  imports: [
    CommonModule,
    SharedModule,
    IonicModule,
  ],
})
export class LayoutsModule {
}
