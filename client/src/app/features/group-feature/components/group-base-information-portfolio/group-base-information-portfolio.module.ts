import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PortfolioIncreaseChartModule, PortfolioStateModule } from '@stock-trading-feature';
import { GroupBaseInformationModule } from '../group-base-information/group-base-information.module';
import { GroupBaseInformationPortfolioComponent } from './group-base-information-portfolio.component';

@NgModule({
	declarations: [GroupBaseInformationPortfolioComponent],
	imports: [CommonModule, GroupBaseInformationModule, PortfolioStateModule, PortfolioIncreaseChartModule],
	exports: [GroupBaseInformationPortfolioComponent],
})
export class GroupBaseInformationPortfolioModule {}
