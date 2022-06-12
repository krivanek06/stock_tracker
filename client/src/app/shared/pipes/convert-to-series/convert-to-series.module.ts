import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ConvertToSeriesPipe } from './convert-to-series.pipe';



@NgModule({
  declarations: [
    ConvertToSeriesPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [ConvertToSeriesPipe]
})
export class ConvertToSeriesModule { }
