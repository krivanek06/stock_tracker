import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StEventCalendarData} from '../../../../api/customGraphql.service';
import {stFormattedDate} from '../../../../shared/utils/shared-functions.functions';

@Component({
    selector: 'app-market-events-selector',
    templateUrl: './market-events-selector.component.html',
    styleUrls: ['./market-events-selector.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MarketEventsSelectorComponent implements OnInit {
    @Output() changeDatesEmitter: EventEmitter<string> = new EventEmitter<string>();
    @Output() selectedDateEmitter: EventEmitter<string> = new EventEmitter<string>();

    @Input() events: StEventCalendarData[] = [];

    constructor() {
    }

    ngOnInit() {
    }

    previousWeek() {
        this.emitNewDate(-7);
    }

    nextWeek() {
        this.emitNewDate(7);
    }

    selectDate(dateString: string) {
        const date = new Date(dateString);
        this.selectedDateEmitter.emit(stFormattedDate(date));
    }

    private emitNewDate(addDays: number) {
        const date = new Date(this.events[0].startdatetime);
        const newDate = new Date(date.getTime() + addDays * 24 * 60 * 60 * 1000);
        this.changeDatesEmitter.emit(stFormattedDate(newDate));
    }
}
