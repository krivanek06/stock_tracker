import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '@shared';
import { AboutPage } from './about.page';

const routes: Routes = [
	{
		path: '',
		component: AboutPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), IonicModule, HeaderModule, CommonModule],
	declarations: [AboutPage],
})
export class AboutPageModule {}
