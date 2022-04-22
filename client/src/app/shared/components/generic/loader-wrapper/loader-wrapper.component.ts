import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-loader-wrapper',
	templateUrl: './loader-wrapper.component.html',
	styleUrls: ['./loader-wrapper.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderWrapperComponent implements OnInit {
	@Input() transparentBackground = true;

	@Input() loaderHeightPx = 300;

	constructor() {}

	ngOnInit(): void {}
}
