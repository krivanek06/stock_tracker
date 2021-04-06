import {Component, OnInit} from '@angular/core';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {LanguageService, ThemeService} from '@core';

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
                private languageService: LanguageService) {
        this.initializeApp();
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
