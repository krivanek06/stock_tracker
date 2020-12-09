import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {GroupCreateFormComponent} from './components/group-create-form/group-create-form.component';
import {GroupTypesListComponent} from './components/group-types-list/group-types-list.component';
import {GroupManagementReadOnlyComponent} from './containers/group-management-read-only/group-management-read-only.component';
import {GroupManagementEditComponent} from './containers/group-management-edit/group-management-edit.component';
import {GroupManagementCreateComponent} from './containers/group-management-create/group-management-create.component';
import {GroupManagementModalComponent} from './containers/modal/group-management-modal/group-management-modal.component';
import {GroupInfoListComponent} from './components/group-info-list/group-info-list.component';
import {GroupInfoComponent} from './components/group-info/group-info.component';


@NgModule({
    declarations: [
        GroupCreateFormComponent,
        GroupTypesListComponent,
        GroupManagementReadOnlyComponent,
        GroupManagementEditComponent,
        GroupManagementCreateComponent,
        GroupManagementModalComponent,
        GroupInfoListComponent,
        GroupInfoComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        GroupInfoListComponent,
        GroupManagementReadOnlyComponent,
        GroupManagementEditComponent,
        GroupManagementCreateComponent,
        GroupManagementModalComponent
    ],
    entryComponents: [
        GroupManagementModalComponent
    ]
})
export class GroupFeatureModule {
}
