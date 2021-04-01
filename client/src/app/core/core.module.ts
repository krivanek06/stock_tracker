import {NgModule} from '@angular/core';


@NgModule({
    declarations: [],
    imports: []
})
export class CoreModule {
    public constructor() {
    }

    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: []
        };
    }
}
