import {Directive, ElementRef, Input, OnInit} from '@angular/core';

interface RecommendationColor {
    value: string;
    color: string;
}

@Directive({
    selector: '[appRecommendation]'
})
export class RecommendationDirective implements OnInit {
    private recommendationColors: RecommendationColor[];
    @Input() appRecommendation;

    constructor(private elRef: ElementRef) {
    }

    ngOnInit(): void {
        this.initRecommendationColors();
        const recommendation = this.recommendationColors.find(s => s.value === this.appRecommendation);
        this.elRef.nativeElement.style.color = recommendation.color;
    }


    private initRecommendationColors() {
        this.recommendationColors = [
            {value: 'Strong Buy', color: '#008F88'},
            {value: 'Buy', color: '#0d920d'},
            {value: 'Hold', color: '#a17a2a'},
            {value: 'Sell', color: '#a81806'},
            {value: 'Strong sell', color: '#711205'}
        ];
    }

}
