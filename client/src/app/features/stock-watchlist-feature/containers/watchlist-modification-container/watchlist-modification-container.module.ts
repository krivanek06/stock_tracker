import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {WatchlistModificationContainerComponent} from "./watchlist-modification-container.component";
import {IonicModule} from "@ionic/angular";
import {InlineModificationFormModule} from "@shared";



@NgModule({
  declarations: [WatchlistModificationContainerComponent],
  imports: [
    CommonModule,
    IonicModule,
    InlineModificationFormModule
  ],
  exports: [WatchlistModificationContainerComponent]
})
export class WatchlistModificationContainerModule { }
