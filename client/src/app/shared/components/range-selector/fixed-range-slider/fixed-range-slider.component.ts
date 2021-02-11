import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-fixed-range-slider',
    templateUrl: './fixed-range-slider.component.html',
    styleUrls: ['./fixed-range-slider.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class FixedRangeSliderComponent implements OnInit {
    @Input() min: number;
    @Input() max: number;
    @Input() value: number;

    constructor() {
    }

    ngOnInit() {
    }

}
