import { Pipe, PipeTransform } from '@angular/core';
import { StGroupUser, StPortfolioSnapshot, StPortfolioSnapshotStarted } from '@core';
import { GroupMemberSortValuesEnum } from '../../model';

@Pipe({
	name: 'groupMemberSort',
})
export class GroupMemberSortPipe implements PipeTransform {
	transform(groupMembers: StGroupUser[], sortingOption: GroupMemberSortValuesEnum): StGroupUser[] {
		groupMembers = [...groupMembers]; // used to get error > Cannot assign to read only property '0'
		if (sortingOption === GroupMemberSortValuesEnum.highest_portfolio) {
			return this.sortByHighestPortfolio(groupMembers);
		}
		if (sortingOption === GroupMemberSortValuesEnum.biggest_gains_since_member) {
			return this.sortByHighestPortfolioSinceGroupMember(groupMembers);
		}

		return groupMembers;
	}

	private sortByHighestPortfolio(groupMembers: StGroupUser[]): StGroupUser[] {
		return groupMembers.sort((a, b) => this.getBalance(b.portfolio.lastPortfolioSnapshot) - this.getBalance(a.portfolio.lastPortfolioSnapshot));
	}

	private sortByHighestPortfolioSinceGroupMember(groupMembers: StGroupUser[]): StGroupUser[] {
		return groupMembers.sort(
			(a, b) =>
				this.getBalance(b.portfolio.lastPortfolioSnapshot) -
				this.getBalance(b.startedPortfolio) -
				(this.getBalance(a.portfolio.lastPortfolioSnapshot) - this.getBalance(a.startedPortfolio))
		);
	}

	private getBalance(portfolio: StPortfolioSnapshot | StPortfolioSnapshotStarted): number {
		return portfolio.portfolioCash + portfolio.portfolioInvested;
	}
}
