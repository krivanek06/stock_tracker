import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { GroupTopUsersInformationModule } from '@group-feature';
import { IonicModule } from '@ionic/angular';
import { FormMatInputWrapperModule, GenericCardModule } from '@shared';
import { SearchGroupPageComponent } from './search-group-page.component';

const routes: Routes = [
	{
		path: '',
		component: SearchGroupPageComponent,
	},
];

@NgModule({
	declarations: [SearchGroupPageComponent],
	imports: [
		CommonModule,
		RouterModule.forChild(routes),
		IonicModule,
		GenericCardModule,
		FormMatInputWrapperModule,
		GroupTopUsersInformationModule,
		ReactiveFormsModule,
	],
})
export class SearchGroupPageModule {}
