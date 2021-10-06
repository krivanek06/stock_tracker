import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {
	constructor() {}

	static getWindowHeightPrctInPx(prct: number): number {
		return (window.screen.height / 100) * prct;
	}

	static getWindowWidth(): number {
		return window.screen.width;
	}
}
