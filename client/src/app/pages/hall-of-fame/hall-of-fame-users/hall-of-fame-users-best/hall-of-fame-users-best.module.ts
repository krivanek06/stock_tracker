import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDisplayModule } from '../components/user-display/user-display.module';
import { HallOfFameUsersBestComponent } from './hall-of-fame-users-best.component';

const routes: Routes = [
	{
		path: '',
		component: HallOfFameUsersBestComponent,
	},
];

@NgModule({
	declarations: [HallOfFameUsersBestComponent],
	imports: [CommonModule, RouterModule.forChild(routes), UserDisplayModule],
})
export class HallOfFameUsersBestModule {}
