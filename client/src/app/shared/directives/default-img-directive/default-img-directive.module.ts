import {NgModule} from '@angular/core';
import {DefaultImgDirective} from "./default-img.directive";


@NgModule({
    declarations: [
        DefaultImgDirective
    ],
    exports: [DefaultImgDirective]
})
export class DefaultImgDirectiveModule {
}
