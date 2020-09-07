import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {IonicModule} from '@ionic/angular';

import {ProfilePageRoutingModule} from './profile-routing.module';

import {ProfilePage} from './profile.page';
import {SharedModule} from '../../shared/shared.module';
import {ProfileFinhubKeyContainerComponent} from './containers/profile-finhub-key-container/profile-finhub-key-container.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        SharedModule,
        ProfilePageRoutingModule
    ],
    declarations: [
        ProfilePage,
        ProfileFinhubKeyContainerComponent
    ]
})
export class ProfilePageModule {
}
