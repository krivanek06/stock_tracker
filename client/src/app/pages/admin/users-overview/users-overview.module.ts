import { NgModule } from '@angular/core';
import { UsersOverviewPage } from './users-overview.page';
import {RouterModule, Routes} from '@angular/router';
import {AdminFeatureModule} from '../../../features/admin-feature/admin-feature.module';
import {IonicModule} from "@ionic/angular";
import {GenericCardModule, GenericChartModule} from "@shared";
import {UserIdentificationInfoModule} from "@account-feature";


const routes: Routes = [
  {
    path: '',
    component: UsersOverviewPage
  }
];


@NgModule({
    imports: [
        RouterModule.forChild(routes),
        AdminFeatureModule,
        IonicModule,
        GenericCardModule,
        GenericChartModule,
        UserIdentificationInfoModule
    ],
  declarations: [UsersOverviewPage]
})
export class UsersOverviewPageModule {}
