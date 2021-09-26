import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-loader-wrapper',
	templateUrl: './loader-wrapper.component.html',
	styleUrls: ['./loader-wrapper.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderWrapperComponent implements OnInit {
	constructor() {}

	ngOnInit(): void {}
}
