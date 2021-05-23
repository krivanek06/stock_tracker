import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AdminPage} from './admin.page';
import {SharedModule} from '@shared';
import {PagesSharedModule} from '@pages-shared';

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
        SharedModule,
        RouterModule.forChild(routes),
        PagesSharedModule
    ],
    declarations: [AdminPage]
})
export class AdminPageModule {
}
