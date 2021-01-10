import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-generic-fancy-card',
    templateUrl: './generic-fancy-card.component.html',
    styleUrls: ['./generic-fancy-card.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class GenericFancyCardComponent implements OnInit {
    @Input() title: string;
    @Input() titleDotColor: string;
    @Input() cardClasses: string;
    @Input() minWidth: number;

    constructor() {
    }

    ngOnInit() {
    }

}
