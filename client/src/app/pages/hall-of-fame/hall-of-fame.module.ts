import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HallOfFamePage } from './hall-of-fame.page';

const routes: Routes = [
	{
		path: '',
		component: HallOfFamePage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), IonicModule],
	declarations: [HallOfFamePage],
})
export class HallOfFamePageModule {}
