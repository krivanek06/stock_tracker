import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from './core/model/appState';
import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {getUser} from './core/store/auth/auth.action';
import {ThemeService} from './core/services/theme.service';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
    constructor(
        private store: Store<AppState>,
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private themeService: ThemeService
    ) {
        this.themeService.enableDark();

        this.initializeApp();
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    ngOnInit() {
        this.store.subscribe(console.log);
        this.store.dispatch(getUser());
    }
}
