import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { stToTitleCase } from '../../utils';

interface RecommendationColor {
	value: string;
	color: string;
}

@Directive({
	selector: '[appRecommendation]',
})
export class RecommendationDirective implements OnChanges {
	@Input() recommendationKey?: string | null = null;
	@Input() recommendationMean?: number | string | null = null;
	private recommendationColors: RecommendationColor[] = [];

	constructor(private elRef: ElementRef, private renderer: Renderer2) {}

	ngOnChanges(changes: SimpleChanges): void {
		if (!this.recommendationKey) {
			this.elRef.nativeElement.innerText = 'N/A';
		} else {
			this.recommendationKey = stToTitleCase(this.recommendationKey);
			this.initRecommendationColors();
			this.renderRecommendation(this.recommendationKey);
		}
	}

	private renderRecommendation(recommendationKey: string): void {
		const recommendation = this.recommendationColors.find((s) => s.value === this.recommendationKey);
		if (recommendation) {
			// recommendation name
			const spanRecommendationName = this.renderer.createElement('span');
			const recommendationName = this.renderer.createText(recommendationKey);
			this.renderer.appendChild(spanRecommendationName, recommendationName);
			this.renderer.setStyle(spanRecommendationName, 'color', recommendation.color);

			// recommendation number
			const spanRecommendationNumber = this.renderer.createElement('span');
			const text = this.renderer.createText(` [${this.recommendationMean}]`);
			this.renderer.appendChild(spanRecommendationNumber, text);

			this.renderer.appendChild(this.elRef.nativeElement, spanRecommendationName);
			this.renderer.appendChild(this.elRef.nativeElement, spanRecommendationNumber);
		} else {
			this.elRef.nativeElement.innerText = 'N/A';
		}
	}

	private initRecommendationColors() {
		this.recommendationColors = [
			{ value: 'Strong Buy', color: '#008F88' },
			{ value: 'Buy', color: '#199419' },
			{ value: 'Hold', color: '#a17a2a' },
			{ value: 'Neutral', color: '#a17a2a' },
			{ value: 'Sell', color: '#a81806' },
			{ value: 'Strong sell', color: '#711205' },
		];
	}
}
