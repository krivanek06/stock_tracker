import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchGroupPageComponent} from "./search-group-page.component";
import {RouterModule, Routes} from "@angular/router";
import {FormMatInputWrapperModule, GenericCardModule} from "@shared";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";
import {GroupTopUsersInformationModule} from "@group-feature";


const routes: Routes = [
    {
        path: '',
        component: SearchGroupPageComponent,
    },
];


@NgModule({
    declarations: [
        SearchGroupPageComponent
    ],
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        GenericCardModule,
        IonicModule,
        FormMatInputWrapperModule,
        ReactiveFormsModule,
        GroupTopUsersInformationModule
    ]
})
export class SearchGroupPageModule {
}
