import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-generic-extension-panel',
	templateUrl: './generic-extension-panel.component.html',
	styleUrls: ['./generic-extension-panel.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GenericExtensionPanelComponent implements OnInit {
	@Input() title!: string;

	constructor() {}

	ngOnInit() {}
}
