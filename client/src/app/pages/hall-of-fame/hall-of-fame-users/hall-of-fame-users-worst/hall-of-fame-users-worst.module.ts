import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserDisplayModule } from '@hall-of-fame';
import { HallOfFameUsersWorstComponent } from './hall-of-fame-users-worst.component';

const routes: Routes = [
	{
		path: '',
		component: HallOfFameUsersWorstComponent,
	},
];

@NgModule({
	declarations: [HallOfFameUsersWorstComponent],
	imports: [CommonModule, RouterModule.forChild(routes), UserDisplayModule],
})
export class HallOfFameUsersWorstModule {}
