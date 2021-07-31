import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StfmCalendarEarnings} from '@core';

@Component({
    selector: 'app-market-calendar-earnings',
    templateUrl: './market-calendar-earnings.component.html',
    styleUrls: ['./market-calendar-earnings.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketCalendarEarningsComponent implements OnInit {
    @Input() calendarEarnings: StfmCalendarEarnings[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
