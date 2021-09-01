import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import {
	componentDestroyed,
	GraphqlGroupService,
	StGroupMemberOverviewFragment,
	StGroupUser,
	StPortfolioSnapshot,
	StPortfolioSnapshotStarted,
	StTransactionSnapshot,
} from '@core';
import { ModalController, NavParams } from '@ionic/angular';
import { PortfolioHistoricalWrapper, STARTING_PORTFOLIO, TIME_INTERVAL_ENUM, TradingFeatureFacadeService } from '@stock-trading-feature';
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
	groupUser: StGroupUser;
	groupMemberOverview: StGroupMemberOverviewFragment;

	sinceGroupMemberChecked: boolean = false;
	tradingChangeWrapper: PortfolioHistoricalWrapper[] = [];

	/* 
    variable needed becuase we can view user proformance since he created his account or since he joined the group
  */
	startedBalance: number;
	stPortfolioSnapshots: StPortfolioSnapshot[];
	stTransactionSnapshots: StTransactionSnapshot[];
	stPortfolioSnapshotStarted: StPortfolioSnapshotStarted;

	constructor(
		private modalController: ModalController,
		private navParams: NavParams,
		private tradingFeatureFacadeService: TradingFeatureFacadeService,
		private graphqlGroupService: GraphqlGroupService,
		private cd: ChangeDetectorRef
	) {}
	ngOnDestroy(): void {}

	ngOnInit(): void {
		this.groupUser = this.navParams.get('groupUser');

		this.graphqlGroupService
			.queryStGroupMemberOverviewById(this.groupUser.id)
			.pipe(takeUntil(componentDestroyed(this)))
			.subscribe((groupMemberOverview) => {
				this.groupMemberOverview = groupMemberOverview;
				this.initPropertiesSinceUserCreatedItsAccount();
				this.cd.detectChanges();
			});
	}

	dismissModal() {
		this.modalController.dismiss();
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
		const sinceGroupMemberTime = new Date(this.groupUser.sinceDate).getTime();

		this.startedBalance = this.groupUser.startedPortfolio.portfolioCash + this.groupUser.startedPortfolio.portfolioInvested;

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
				this.groupMemberOverview.portfolio.numberOfExecutedBuyTransactions - this.groupUser.startedPortfolio.numberOfExecutedBuyTransactions,
			numberOfExecutedSellTransactions:
				this.groupMemberOverview.portfolio.numberOfExecutedSellTransactions - this.groupUser.startedPortfolio.numberOfExecutedSellTransactions,
			portfolioCash: this.groupMemberOverview.portfolio.lastPortfolioSnapshot.portfolioCash - this.groupUser.startedPortfolio.portfolioCash,
			portfolioInvested:
				this.groupMemberOverview.portfolio.lastPortfolioSnapshot.portfolioInvested - this.groupUser.startedPortfolio.portfolioInvested,
		};
	}

	private initPropertiesSinceUserCreatedItsAccount(): void {
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
