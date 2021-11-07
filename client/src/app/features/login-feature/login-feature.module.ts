import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { FormMatInputWrapperModule } from '@shared';
import { LoginComponent, RegistrationComponent } from './components';
import { AuthenticationPopoverComponent } from './entry-points';

@NgModule({
	declarations: [AuthenticationPopoverComponent, RegistrationComponent, LoginComponent],
	imports: [CommonModule, IonicModule, ReactiveFormsModule, FormMatInputWrapperModule],
	exports: [AuthenticationPopoverComponent],
})
export class LoginFeatureModule {}
