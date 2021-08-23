import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TradeConfirmationPopOverComponent} from "./trade-confirmation-pop-over.component";
import {IonicModule} from "@ionic/angular";
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
    declarations: [TradeConfirmationPopOverComponent],
    imports: [
        IonicModule, CommonModule, ReactiveFormsModule
    ],
    exports: [TradeConfirmationPopOverComponent]
})
export class TradeConfirmationPopOverModule {
}
