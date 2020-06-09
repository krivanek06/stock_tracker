import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoggedInGuard} from 'ngx-auth-firebaseui';
import {LoginComponent} from './core/components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {
    path: 'dashboard',
    loadChildren: () => import('./features/stock-tracker/stock-tracker.module').then(mod => mod.StockTrackerModule),
    canActivate: [LoggedInGuard]
  },
  {path: '**', redirectTo: 'login'}
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
