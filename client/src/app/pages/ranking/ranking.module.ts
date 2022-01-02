import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { RankingPage } from './ranking.page';

const routes: Routes = [
	{
		path: '',
		component: RankingPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), IonicModule],
	declarations: [RankingPage],
})
export class RankingPageModule {}
