import {NgModule} from '@angular/core';
import {MenuPageRoutingModule} from './menu-routing.module';
import {MenuPage} from './menu.page';
import {SharedModule} from '@shared';

@NgModule({
    imports: [
        MenuPageRoutingModule,
        SharedModule
    ],
    declarations: [MenuPage]
})
export class MenuPageModule {
}
