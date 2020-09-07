import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-fixed-range-slider',
    templateUrl: './fixed-range-slider.component.html',
    styleUrls: ['./fixed-range-slider.component.scss'],
})
export class FixedRangeSliderComponent implements OnInit {
    @Input() min: number;
    @Input() max: number;
    @Input() value: number;

    @Input() minDisplayName: string;
    @Input() maxDisplayName: string;
    @Input() valueDisplayName: string;

    constructor() {
    }

    ngOnInit() {
    }

}
