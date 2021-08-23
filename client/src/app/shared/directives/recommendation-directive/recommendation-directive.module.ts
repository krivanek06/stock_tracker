import {NgModule} from '@angular/core';
import {RecommendationDirective} from "./recommendation.directive";


@NgModule({
    declarations: [RecommendationDirective],
    exports: [RecommendationDirective]
})
export class RecommendationDirectiveModule {
}
