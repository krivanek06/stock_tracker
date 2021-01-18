import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {fadeOut} from '../../../animations/fadeOut.animation';

@Component({
    selector: 'app-generic-fading-card-content',
    templateUrl: './generic-fading-card-content.component.html',
    styleUrls: ['./generic-fading-card-content.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    animations: [
        fadeOut
    ]
})
export class GenericFadingCardContentComponent implements OnInit {
    @Input() title: string;
    @Input() showContent = true;
    @Input() addMarginTop = false;

    constructor() {
    }

    ngOnInit() {
    }

    toggleDisplay() {
        this.showContent = !this.showContent;
    }

}
