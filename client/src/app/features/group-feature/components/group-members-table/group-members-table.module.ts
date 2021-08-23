import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupMembersTableComponent} from "./group-members-table.component";
import {IonicModule} from "@ionic/angular";
import {FormMatInputWrapperModule} from "@shared";
import {ReactiveFormsModule} from "@angular/forms";
import {GroupMemberSortModule} from "../../pipes";
import {GroupUserBaseInformationModule} from "../group-user-base-information/group-user-base-information.module";



@NgModule({
  declarations: [GroupMembersTableComponent],
  imports: [
    CommonModule,
    IonicModule,
    FormMatInputWrapperModule,
    ReactiveFormsModule,
    GroupMemberSortModule,
    GroupUserBaseInformationModule
  ],
  exports: [GroupMembersTableComponent]
})
export class GroupMembersTableModule { }
