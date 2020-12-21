import {NgModule} from '@angular/core';
import {SearchPage} from './search.page';
import {SharedModule} from '../../shared/shared.module';
import {RouterModule, Routes} from '@angular/router';
import {path} from '@angular-devkit/core';
import {SearchStockComponent} from './pages/search-stock/search-stock.component';
import {SearchGroupComponent} from './pages/search-group/search-group.component';
import {SearchUserComponent} from './pages/search-user/search-user.component';


const routes: Routes = [
    {
        path: '',
        component: SearchPage,
        children: [
            {
                path: '',
                redirectTo: 'search-stock'
            },
            {
                path: 'search-stock',
                component: SearchStockComponent
            },
            {
                path: 'search-user',
                component: SearchUserComponent
            },
            {
                path: 'search-group',
                component: SearchGroupComponent
            }
        ]
    }
];

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        SearchPage,
        SearchStockComponent,
        SearchGroupComponent,
        SearchUserComponent
    ]
})
export class SearchPageModule {
}
