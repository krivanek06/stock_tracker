import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {NavParams, PopoverController} from '@ionic/angular';
import {IdNameContainer} from '../../models';

@Component({
    selector: 'app-option-picker-pop-over',
    templateUrl: './option-picker-pop-over.component.html',
    styleUrls: ['./option-picker-pop-over.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class OptionPickerPopOverComponent implements OnInit {
    title: string;
    options: IdNameContainer[] = [];

    constructor(private navParams: NavParams,
                private popoverController: PopoverController) {
        this.title = this.navParams.get('title');
        this.options = this.navParams.get('options');
    }

    ngOnInit(): void {

    }

    dismissModal() {
        this.popoverController.dismiss();
    }

    addSymbolToWatchlist(id: string) {
        this.popoverController.dismiss({id});
    }

}
