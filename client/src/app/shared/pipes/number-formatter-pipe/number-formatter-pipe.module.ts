import {NgModule} from '@angular/core';
import {NumberFormatterPipe} from "./numberFormatter.pipe";


@NgModule({
    declarations: [
        NumberFormatterPipe
    ],
    exports: [
        NumberFormatterPipe
    ]
})
export class NumberFormatterPipeModule {
}
