import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GenericFancyCardComponent} from "./generic-fancy-card.component";
import {IonicModule} from "@ionic/angular";


@NgModule({
    declarations: [GenericFancyCardComponent],
    imports: [
        CommonModule,
        IonicModule
    ],
    exports: [GenericFancyCardComponent]
})
export class GenericFancyCardModule {
}
