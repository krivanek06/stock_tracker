import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {
	componentDestroyed,
	GraphqlGroupService,
	STARTING_PORTFOLIO,
	StGroupMemberOverviewFragment,
	StGroupUser,
	StPortfolioSnapshot,
	StPortfolioSnapshotStarted,
	StTransactionSnapshot,
} from '@core';
import { WindowService } from '@shared';
import { PortfolioHistoricalWrapper, TIME_INTERVAL_ENUM, TradingFeatureFacadeService } from '@stock-trading-feature';
import { takeUntil } from 'rxjs/operators';

@Component({
	selector: 'app-group-member-overview-modal',
	templateUrl: './group-member-overview-modal.component.html',
	styleUrls: ['./group-member-overview-modal.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GroupMemberOverviewModalComponent implements OnInit, OnDestroy {
	/* 
    both variable reference the same user
  */
	groupMemberOverview?: StGroupMemberOverviewFragment;

	sinceGroupMemberChecked: boolean = false;
	tradingChangeWrapper: PortfolioHistoricalWrapper[] = [];

	/* 
    variable needed becuase we can view user proformance since he created his account or since he joined the group
  */
	startedBalance: number = STARTING_PORTFOLIO;
	stPortfolioSnapshots: StPortfolioSnapshot[] = [];
	stTransactionSnapshots: StTransactionSnapshot[] = [];
	stPortfolioSnapshotStarted!: StPortfolioSnapshotStarted;

	chartHeight!: number;

	constructor(
		private tradingFeatureFacadeService: TradingFeatureFacadeService,
		private graphqlGroupService: GraphqlGroupService,
		private cd: ChangeDetectorRef,
		private dialogRef: MatDialogRef<GroupMemberOverviewModalComponent>,
		@Inject(MAT_DIALOG_DATA) public data: { groupUser: StGroupUser }
	) {}
	ngOnDestroy(): void {}

	ngOnInit(): void {
		this.chartHeight = WindowService.getWindowHeightPrctInPx(35);

		this.graphqlGroupService
			.queryStGroupMemberOverviewById(this.data.groupUser.id)
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe((groupMemberOverview) => {
				this.groupMemberOverview = groupMemberOverview;
				this.initPropertiesSinceUserCreatedItsAccount();
				this.cd.detectChanges();
			});
	}

	dismissModal() {
		this.dialogRef.close();
	}

	toggleGroupMemberOverview(): void {
		this.sinceGroupMemberChecked = !this.sinceGroupMemberChecked;

		if (this.sinceGroupMemberChecked) {
			this.initPropertiesSinceUserJoinedGroup();
		} else {
			this.initPropertiesSinceUserCreatedItsAccount();
		}
	}

	private initPropertiesSinceUserJoinedGroup(): void {
		if (!this.data.groupUser || !this.groupMemberOverview) {
			return;
		}
		const sinceGroupMemberTime = new Date(this.data.groupUser.sinceDate).getTime();

		this.startedBalance = this.data.groupUser.startedPortfolio.portfolioCash + this.data.groupUser.startedPortfolio.portfolioInvested;

		this.stPortfolioSnapshots = this.groupMemberOverview.userHistoricalData.portfolioSnapshots.filter(
			(snapshot) => new Date(snapshot.date).getTime() > sinceGroupMemberTime
		);
		this.stTransactionSnapshots = this.groupMemberOverview.userHistoricalData.transactionSnapshots.filter(
			(snapshot) => new Date(snapshot.date).getTime() > sinceGroupMemberTime
		);
		this.tradingChangeWrapper = this.tradingFeatureFacadeService.createPortfolioHistoricalWrappers(this.stPortfolioSnapshots, [
			TIME_INTERVAL_ENUM.DAILY,
			TIME_INTERVAL_ENUM.WEEKLY,
			TIME_INTERVAL_ENUM.MONTHLY,
			TIME_INTERVAL_ENUM.FROM_BEGINNING,
		]);

		this.stPortfolioSnapshotStarted = {
			date: this.groupMemberOverview.accountCreatedDate,
			numberOfExecutedBuyTransactions:
				this.groupMemberOverview.portfolio.numberOfExecutedBuyTransactions - this.data.groupUser.startedPortfolio.numberOfExecutedBuyTransactions,
			numberOfExecutedSellTransactions:
				this.groupMemberOverview.portfolio.numberOfExecutedSellTransactions - this.data.groupUser.startedPortfolio.numberOfExecutedSellTransactions,
			portfolioCash: this.groupMemberOverview.portfolio.lastPortfolioSnapshot.portfolioCash - this.data.groupUser.startedPortfolio.portfolioCash,
			portfolioInvested:
				this.groupMemberOverview.portfolio.lastPortfolioSnapshot.portfolioInvested - this.data.groupUser.startedPortfolio.portfolioInvested,
		};
	}

	private initPropertiesSinceUserCreatedItsAccount(): void {
		if (!this.data.groupUser || !this.groupMemberOverview) {
			return;
		}
		this.startedBalance = STARTING_PORTFOLIO;
		this.stPortfolioSnapshots = this.groupMemberOverview.userHistoricalData.portfolioSnapshots;
		this.stTransactionSnapshots = this.groupMemberOverview.userHistoricalData.transactionSnapshots;

		this.tradingChangeWrapper = this.tradingFeatureFacadeService.createPortfolioHistoricalWrappers(this.stPortfolioSnapshots, [
			TIME_INTERVAL_ENUM.DAILY,
			TIME_INTERVAL_ENUM.WEEKLY,
			TIME_INTERVAL_ENUM.MONTHLY,
			TIME_INTERVAL_ENUM.FROM_BEGINNING,
		]);

		this.stPortfolioSnapshotStarted = {
			date: this.groupMemberOverview.accountCreatedDate,
			numberOfExecutedBuyTransactions: this.groupMemberOverview.portfolio.numberOfExecutedBuyTransactions,
			numberOfExecutedSellTransactions: this.groupMemberOverview.portfolio.numberOfExecutedSellTransactions,
			portfolioCash: this.groupMemberOverview.portfolio.lastPortfolioSnapshot.portfolioCash,
			portfolioInvested: this.groupMemberOverview.portfolio.lastPortfolioSnapshot.portfolioInvested,
		};
	}
}
