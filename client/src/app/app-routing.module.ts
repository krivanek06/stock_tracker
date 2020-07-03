import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoggedInGuard} from 'ngx-auth-firebaseui';
import {DefaultLayoutComponent} from './layouts/default-layout/default-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then(mod => mod.LoginPageModule)
  },
  {
    path: 'app',
    component: DefaultLayoutComponent,
    canActivate: [LoggedInGuard],
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./pages/dashboard/dashboard.module').then(mod => mod.DashboardPageModule)
      },
      {
        path: 'watchlist',
        loadChildren: () => import('./pages/watchlist/watchlist.module').then(mod => mod.WatchlistPageModule)
      },
      {
        path: 'stock-details',
        loadChildren: () => import('./pages/stock-details/stock-details.module').then(mod => mod.StockDetailsPageModule)
      },
      {
        path: 'simulator',
        loadChildren: () => import('./pages/simulator/simulator.module').then(mod => mod.SimulatorPageModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./pages/about/about.module').then(mod => mod.AboutPageModule)
      },
      {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.module').then(mod => mod.AdminPageModule)
      },
      {
        path: '**',
        redirectTo: 'dashboard'
      }
    ]
  },
  {path: '**', redirectTo: 'app'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    preloadingStrategy: PreloadAllModules,
    enableTracing: false, // Turn this on to log routing events to the console
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
