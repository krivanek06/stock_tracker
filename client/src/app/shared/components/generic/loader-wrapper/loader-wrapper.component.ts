import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-loader-wrapper',
	templateUrl: './loader-wrapper.component.html',
	styleUrls: ['./loader-wrapper.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoaderWrapperComponent implements OnInit {
	@Input() transparentBackground = true;

	@Input() loaderHeightPx = 300;

	/*
    used to show a placeholder content to hide the loader if component is not displayed
    assign value in ms, 1sec === 1000ms
  */
	@Input() showPlaceHolderAfter?: number;
	showPlaceholder = false;

	constructor(private cd: ChangeDetectorRef) {}

	ngOnInit(): void {
		this.initPlaceholder();
	}

	private initPlaceholder(): void {
		if (!this.showPlaceHolderAfter) {
			return;
		}
		setTimeout(() => {
			this.showPlaceholder = true;
			this.cd.detectChanges();
		}, this.showPlaceHolderAfter);
	}
}
