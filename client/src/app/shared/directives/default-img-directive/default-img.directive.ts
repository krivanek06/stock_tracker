import { AfterViewInit, Directive, ElementRef, Input } from '@angular/core';

@Directive({
	selector: '[appDefaultImg]',
})
export class DefaultImgDirective implements AfterViewInit {
	@Input() src!: string | null | undefined;

	constructor(private imageRef: ElementRef) {}

	ngAfterViewInit(): void {
		const img = new Image();

		if (!this.src) {
			this.setImage('assets/image-placeholder.jpg');
			return;
		}
		img.onload = () => {
			if (this.src) {
				this.setImage(this.src);
			}
		};

		img.onerror = () => {
			// Set a placeholder image
			this.setImage('assets/image-placeholder.jpg');
		};

		img.src = this.src;
	}

	private setImage(src: string) {
		this.imageRef.nativeElement.setAttribute('src', src);
	}
}
