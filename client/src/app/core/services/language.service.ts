import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {StorageService} from './storage/storage.service';


@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private STORAGE_KEY = 'PROFFERED_LANGUAGE';
    private selectedLanguage = 'en';

    constructor(private translate: TranslateService,
                private storageService: StorageService) {
    }

    get selected(): string {
        return this.selectedLanguage;
    }

    setInitialLanguage() {
        const language = this.translate.getBrowserLang();
        const storedLanguage = this.storageService.getData(this.STORAGE_KEY) as string;

        this.translate.setDefaultLang(storedLanguage || language);
        this.selectedLanguage = storedLanguage || language;
    }

    getLanguages() {
        return [
            {text: 'English', value: 'en', img: 'assets/img/countries/en.png'},
            {text: 'Slovak', value: 'sk', img: 'assets/img/countries/sk.png'}
        ];
    }

    setLanguage(lng) {
        this.translate.use(lng);
        this.selectedLanguage = lng;
        this.storageService.saveData(this.STORAGE_KEY, lng);
    }

}
