import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {SearchPage} from './search.page';
import {SearchUserComponent} from './pages/search-user/search-user.component';
import {SEARCH_PAGE_ENUM} from './models/pages.model';

const routes: Routes = [
    {
        path: '',
        component: SearchPage,
        children: [
            {
                path: SEARCH_PAGE_ENUM.USER,
                component: SearchUserComponent,
            },
            /*{
                path: SEARCH_PAGE_ENUM.GROUP,
                component: SearchGroupComponent,
                children: [
                    {
                        path: ':id',
                        component: GroupsReadComponent
                    }
                ]
            },*/
            {
                path: SEARCH_PAGE_ENUM.STOCK,
                loadChildren: () => import('./pages/search-stock/search-stock.module').then(m => m.SearchStockModule)
            },
            {
                path: '',
                redirectTo: SEARCH_PAGE_ENUM.STOCK,
                pathMatch: 'full'
            },
        ]
    }
];


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class SearchPageRoutingModule {
}

