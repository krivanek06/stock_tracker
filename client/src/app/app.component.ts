import {ApplicationRef, Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LanguageService, ThemeService} from '@core';

// https://dmitrymogilko.medium.com/profiling-angular-change-detection-c00605862b9f
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(private platform: Platform,
                private splashScreen: SplashScreen,
                private statusBar: StatusBar,
                private themeService: ThemeService,
                private languageService: LanguageService,
                applicationRef: ApplicationRef) {
        this.initializeApp();

        // monitor change detection
        /*const originalTick = applicationRef.tick;
        applicationRef.tick = function() {
            const windowPerfomance = window.performance;
            const  before = windowPerfomance.now();
            const retValue = originalTick.apply(this, arguments);
            const after = windowPerfomance.now();
            const runTime = after - before;
            window.console.log('CHANGE DETECTION TIME' , runTime);
            return retValue;
        };*/
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();

            this.themeService.enableDark();
            this.languageService.setInitialLanguage();
        });
    }

    ngOnInit() {
    }
}
