import { AfterViewInit, Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
	selector: '[appDefaultImg]',
})
export class DefaultImgDirective implements AfterViewInit {
	@Input() src!: string | null | undefined;
	@Input() imageType: 'default' | 'user' = 'default';

	constructor(private imageRef: ElementRef, private rendere2: Renderer2) {}

	ngAfterViewInit(): void {
		const img = new Image();

		if (!this.src) {
			this.setImage(this.resolveImage());
			return;
		}
		img.onload = () => {
			if (this.src) {
				this.setImage(this.src);
			}
		};

		img.onerror = () => {
			// Set a placeholder image
			this.setImage(this.resolveImage());
		};

		img.src = this.src;
	}

	private setImage(src: string) {
		this.imageRef.nativeElement.setAttribute('src', src);
	}

	private resolveImage(): string {
		if (this.imageType === 'user') {
			return 'assets/default_user.png';
		}
		return 'assets/image-placeholder.jpg';
	}
}
