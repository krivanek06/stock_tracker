import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GroupMemberSortPipe} from "./group-member-sort.pipe";



@NgModule({
  declarations: [GroupMemberSortPipe],
  imports: [
    CommonModule
  ],
  exports: [GroupMemberSortPipe]
})
export class GroupMemberSortModule { }
