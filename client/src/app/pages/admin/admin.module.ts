import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPage} from './admin.page';
import {IonicModule} from "@ionic/angular";
import {HeaderModule} from "@shared";
import {MenuHeaderModule} from "@pages-shared";
import {CommonModule} from "@angular/common";

const routes: Routes = [
    {
        path: '',
        component: AdminPage,
        children: [
            {
                path: '',
                redirectTo: 'users-overview',
                pathMatch: 'full'
            },
            {
                path: 'users-overview',
                loadChildren: () => import('./users-overview/users-overview.module').then(m => m.UsersOverviewPageModule)
            }
        ]
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes),
        IonicModule,
        HeaderModule,
        MenuHeaderModule,
        CommonModule
    ],
    declarations: [AdminPage]
})
export class AdminPageModule {
}
