import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SearchGroupPageComponent} from "./search-group-page.component";
import {GroupFeatureModule} from "@group-feature";
import {SharedModule} from "@shared";
import {RouterModule, Routes} from "@angular/router";


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
        GroupFeatureModule,
        SharedModule,
        RouterModule.forChild(routes)
    ]
})
export class SearchGroupPageModule {
}
