import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import {
	UserAccountFormComponent,
	UserAccountInfoComponent,
	UserAccountInfoListComponent,
	UserAccountNotActivatedMessageComponent,
	UserAccountResetedInfoComponent,
	UserIdentificationInfoComponent,
} from './components';
import { UserAccountSearchComponent, UserAccountSearchFormComponent } from './containers';
import { AccountFeatureFacadeService } from './services';

@NgModule({
	declarations: [
		UserAccountInfoComponent,
		UserAccountInfoListComponent,
		UserAccountSearchComponent,
		UserAccountFormComponent,
		UserAccountResetedInfoComponent,
		UserIdentificationInfoComponent,
		UserAccountSearchFormComponent,
		UserAccountNotActivatedMessageComponent,
	],
	imports: [SharedModule],
	exports: [
		UserAccountInfoComponent,
		UserAccountInfoListComponent,
		UserAccountSearchComponent,
		UserAccountFormComponent,
		UserAccountResetedInfoComponent,
		UserIdentificationInfoComponent,
		UserAccountSearchFormComponent,
		UserAccountNotActivatedMessageComponent,
	],
	providers: [AccountFeatureFacadeService],
})
export class AccountFeatureModule {}
