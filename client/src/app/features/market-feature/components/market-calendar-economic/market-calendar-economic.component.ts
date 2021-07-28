import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {StfmCalendarEconomic} from '@core';

@Component({
    selector: 'app-market-calendar-economic',
    templateUrl: './market-calendar-economic.component.html',
    styleUrls: ['./market-calendar-economic.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketCalendarEconomicComponent implements OnInit {
    @Input() calendarEconomic: StfmCalendarEconomic[] = [];

    constructor() {
    }

    ngOnInit() {
    }

}
