import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StfmCalendarIpo} from '@core';

@Component({
    selector: 'app-market-calendar-ipo',
    templateUrl: './market-calendar-ipo.component.html',
    styleUrls: ['./market-calendar-ipo.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketCalendarIpoComponent implements OnInit {
    @Input() calendarIpos: StfmCalendarIpo[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
