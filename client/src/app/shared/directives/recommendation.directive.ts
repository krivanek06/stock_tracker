import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';
import {stToTitleCase} from '../utils/shared-functions.functions';

interface RecommendationColor {
    value: string;
    color: string;
}

@Directive({
    selector: '[appRecommendation]'
})
export class RecommendationDirective implements OnInit {
    private recommendationColors: RecommendationColor[];
    @Input() recommendationKey: string;
    @Input() recommendationMean;

    constructor(private elRef: ElementRef,
                private renderer: Renderer2) {
    }

    ngOnInit(): void {
        this.initRecommendationColors();
        this.recommendationKey = stToTitleCase(this.recommendationKey);
        const recommendation = this.recommendationColors.find(s => s.value === this.recommendationKey);

        if (recommendation) {
            // recommendation name
            const spanRecommendationName = this.renderer.createElement('span');
            const recommendationName = this.renderer.createText(this.recommendationKey);
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
            {value: 'Strong Buy', color: '#008F88'},
            {value: 'Buy', color: '#199419'},
            {value: 'Hold', color: '#a17a2a'},
            {value: 'Sell', color: '#a81806'},
            {value: 'Strong sell', color: '#711205'}
        ];
    }

}
