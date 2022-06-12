import { AccountOverviewDialogComponent } from '@account-feature';
import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { StPortfolioChange, StUserIdentificationPortfolioFragmentFragment } from '@core';
import { HallOfFameColors } from '../../models/hall-of-fame.model';

@Component({
	selector: 'app-user-display',
	templateUrl: './user-display.component.html',
	styleUrls: ['./user-display.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserDisplayComponent implements OnInit {
	@Input() title!: string;
	@Input() userIdentifications: StUserIdentificationPortfolioFragmentFragment[] | null = [];
	@Input() colorIndex!: number;
	@Input() portfolioChangeKey?: keyof StPortfolioChange;

	HallOfFameColors = HallOfFameColors;

	constructor(private dialog: MatDialog) {}

	ngOnInit(): void {}

	showUser(userIdentification: StUserIdentificationPortfolioFragmentFragment) {
		this.dialog.open(AccountOverviewDialogComponent, {
			data: { userIdentification },
			panelClass: 'g-mat-dialog-big',
		});
	}
}
