import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {AuthFeatureService} from '../../../../features/auth-feature/services/auth-feature.service';
import {UserPrivateData} from '../../../../api/customGraphql.service';
import {ToastController} from '@ionic/angular';
import {IonicDialogService} from '../../../../shared/services/ionic-dialog.service';

@Component({
    selector: 'app-profile-finhub-key-container',
    templateUrl: './profile-finhub-key-container.component.html',
    styleUrls: ['./profile-finhub-key-container.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProfileFinhubKeyContainerComponent implements OnInit {

    constructor(private authFeatureService: AuthFeatureService,
                private ionicDialogService: IonicDialogService) {
    }

    ngOnInit() {
    }

    sendFinnhubKeyToFirebase(finnhubKey: string) {
        console.log(finnhubKey);
        const userPrivateData: UserPrivateData = {
            finnhubKey
        };
        this.authFeatureService.updateUserPrivateData(userPrivateData)
            .subscribe(() => this.ionicDialogService.presentToast('Finnhub key was save'));
    }
}
