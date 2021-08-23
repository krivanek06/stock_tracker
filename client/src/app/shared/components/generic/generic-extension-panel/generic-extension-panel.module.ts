import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {GenericExtensionPanelComponent} from "./generic-extension-panel.component";
import {MatExpansionModule} from "@angular/material/expansion";



@NgModule({
  declarations: [GenericExtensionPanelComponent],
  imports: [
    CommonModule,
    MatExpansionModule
  ],
  exports: [GenericExtensionPanelComponent]
})
export class GenericExtensionPanelModule { }
