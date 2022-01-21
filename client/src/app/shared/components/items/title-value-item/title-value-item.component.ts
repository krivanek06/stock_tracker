import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-title-value-item',
	templateUrl: './title-value-item.component.html',
	styleUrls: ['./title-value-item.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TitleValueItemComponent implements OnInit {
	@Input() title!: string;
	@Input() value?: number | null = null;
	@Input() isPercent: boolean = false;
	@Input() showDollarSign: boolean = false;
	@Input() flexRowOn: 'md' | 'sm' = 'md';

	constructor() {}

	ngOnInit(): void {}
}
