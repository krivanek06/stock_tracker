import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { LoginComponent, RegistrationComponent } from './components';
import { AuthenticationPopoverComponent } from './entry-points';

@NgModule({
	declarations: [AuthenticationPopoverComponent, RegistrationComponent, LoginComponent],
	imports: [CommonModule, IonicModule, ReactiveFormsModule],
	exports: [AuthenticationPopoverComponent, RegistrationComponent, LoginComponent],
})
export class LoginFeatureModule {}
