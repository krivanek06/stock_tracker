import { UserAccountSearchModule } from '@account-feature';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterModule, Routes } from '@angular/router';
import { ComposedSearchedUserDataModule } from '@composed-components-feature';
import { IonicModule } from '@ionic/angular';
import { SearchUserPageComponent } from './search-user-page.component';

const routes: Routes = [
	{
		path: '',
		component: SearchUserPageComponent,
	},
];

@NgModule({
	declarations: [SearchUserPageComponent],
	imports: [CommonModule, RouterModule.forChild(routes), IonicModule, UserAccountSearchModule, ComposedSearchedUserDataModule, MatButtonModule],
})
export class SearchUserPageModule {}
