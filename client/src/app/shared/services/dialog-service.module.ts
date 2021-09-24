import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { ConfirmationPopOverModule } from '../entry-components/confirmation-pop-over/confirmation-pop-over.module';
import { InlineInputPopUpModule } from '../entry-components/inline-input-pop-up/inline-input-pop-up.module';
import { OptionPickerPopOverModule } from '../entry-components/option-picker-pop-over/option-picker-pop-over.module';
import { DialogService } from './dialog.service';

@NgModule({
	declarations: [],
	imports: [IonicModule, InlineInputPopUpModule, ConfirmationPopOverModule, OptionPickerPopOverModule],
	providers: [DialogService],
	exports: [IonicModule, InlineInputPopUpModule, ConfirmationPopOverModule, OptionPickerPopOverModule],
})
export class DialogServiceModule {}
