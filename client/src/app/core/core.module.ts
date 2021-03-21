import {NgModule} from '@angular/core';
import {IonicDialogService} from './services';


@NgModule({
    declarations: [],
    imports: []
})
export class CoreModule {
    public constructor(ionicDialogService: IonicDialogService) {
        // ^^^ forces an instance to be created
    }

    static forRoot() {
        return {
            ngModule: CoreModule,
            providers: [IonicDialogService]
        };
    }
}
