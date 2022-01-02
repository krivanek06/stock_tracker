import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { StAdminMainInformationsFragmentFragment } from '@core';

@Component({
	selector: 'app-application-informations',
	templateUrl: './application-informations.component.html',
	styleUrls: ['./application-informations.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApplicationInformationsComponent implements OnInit {
	@Input() adminMainInformations!: StAdminMainInformationsFragmentFragment;

	constructor() {}

	ngOnInit(): void {}
}
