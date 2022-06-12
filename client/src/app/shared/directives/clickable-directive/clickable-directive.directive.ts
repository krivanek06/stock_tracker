import { Directive, ElementRef, Input, OnChanges, OnInit, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
	selector: '[appClickableDirective]',
})
export class ClickableDirectiveDirective implements OnInit, OnChanges {
	@Input() appClickableDirective: boolean = false;
	constructor(private renderer: Renderer2, private elRef: ElementRef) {}

	ngOnInit(): void {}

	ngOnChanges(changes: SimpleChanges): void {
		if (changes?.['appClickableDirective']?.currentValue !== undefined) {
			this.initRender();
		}
	}

	private initRender(): void {
		if (this.appClickableDirective) {
			this.renderer.addClass(this.elRef.nativeElement, 'g-clickable');
		} else {
			this.renderer.removeClass(this.elRef.nativeElement, 'g-clickable');
		}
	}
}
