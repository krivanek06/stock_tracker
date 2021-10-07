import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '@shared';
import { MenuHeaderModule } from 'src/app/features/composed-components-feature';
import { RankingPage } from './ranking.page';

const routes: Routes = [
	{
		path: '',
		component: RankingPage,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), MenuHeaderModule, HeaderModule, IonicModule],
	declarations: [RankingPage],
})
export class RankingPageModule {}
