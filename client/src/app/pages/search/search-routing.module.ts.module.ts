import {RouterModule, Routes} from '@angular/router';
import {SearchPage} from './search.page';
import {SearchStockComponent} from './pages/search-stock/search-stock.component';
import {SearchStockSummaryComponent} from './pages/search-stock/search-stock-summary/search-stock-summary.component';
import {SearchStockDetailsPage} from './pages/search-stock/search-stock-details/search-stock-details-page.component';
import {StockDetailsStatisticComponent} from './pages/search-stock/search-stock-details/pages/stock-details-statistic/stock-details-statistic.component';
import {StockDetailsFinancialComponent} from './pages/search-stock/search-stock-details/pages/stock-details-financial/stock-details-financial.component';
import {SearchUserComponent} from './pages/search-user/search-user.component';
import {SearchGroupComponent} from './pages/search-group/search-group.component';
import {SEARCH_PAGE_ENUM, SEARCH_PAGE_STOCK_DETAILS_ENUM, SEARCH_PAGE_STOCK_ENUM} from './models/pages.model';
import {NgModule} from '@angular/core';
import {GroupsReadComponent} from '../groups/pages/groups-read/groups-read.component';

const routes: Routes = [
  {
    path: '',
    component: SearchPage,
    children: [
      {
        path: '',
        redirectTo: SEARCH_PAGE_ENUM.STOCK
      },
      {
        path: SEARCH_PAGE_ENUM.STOCK,
        component: SearchStockComponent,
        children: [
          {
            path: '',
            redirectTo: SEARCH_PAGE_STOCK_ENUM.SUMMARY
          },
          {
            path: SEARCH_PAGE_STOCK_ENUM.SUMMARY,
            component: SearchStockSummaryComponent
          },
          {
            path: `${SEARCH_PAGE_STOCK_ENUM.DETAILS}/:symbol`,
            component: SearchStockDetailsPage,
            children: [
              {
                path: '',
                redirectTo: SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS
              },
              {
                path: SEARCH_PAGE_STOCK_DETAILS_ENUM.STATISTICS,
                component: StockDetailsStatisticComponent
              },
              {
                path: SEARCH_PAGE_STOCK_DETAILS_ENUM.FINANCIAL,
                component: StockDetailsFinancialComponent
              }
            ]
          }
        ]
      },
      {
        path: SEARCH_PAGE_ENUM.USER,
        component: SearchUserComponent
      },
      {
        path: SEARCH_PAGE_ENUM.GROUP,
        component: SearchGroupComponent,
        children: [
          {
            path: ':id',
            component: GroupsReadComponent
          }
        ]
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

