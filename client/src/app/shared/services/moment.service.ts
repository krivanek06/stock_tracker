import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
	providedIn: 'root',
})
export class MomentService {
	constructor() {}

	static isSameDay(date1: string, date2: string): boolean {
		return moment(date1).isSame(moment(date2), 'day');
	}

	static isToday(date: string): boolean {
		return moment(date).isSame(moment(new Date()), 'day');
	}
}