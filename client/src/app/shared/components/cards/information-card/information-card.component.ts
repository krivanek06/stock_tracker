import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-information-card',
	templateUrl: './information-card.component.html',
	styleUrls: ['./information-card.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InformationCardComponent implements OnInit {
	@Input() title: string;

	constructor() {}

	ngOnInit(): void {}
}
