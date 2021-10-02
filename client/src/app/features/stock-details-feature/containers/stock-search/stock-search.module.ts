import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ListSkeletonModule, StockInfoIdentificationItemModule } from '@shared';
import { StockSearchComponent } from './stock-search.component';

@NgModule({
	declarations: [StockSearchComponent],
	imports: [CommonModule, IonicModule, ReactiveFormsModule, StockInfoIdentificationItemModule, ListSkeletonModule],
	exports: [StockSearchComponent],
})
export class StockSearchModule {}
