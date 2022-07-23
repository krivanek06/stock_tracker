import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable({
	providedIn: 'root',
})
export class MomentService {
	constructor() {}

	static isMoreThan(date1?: string, days?: number): boolean {
		if (!date1 || !days) {
			return false;
		}
		const threshold = moment().subtract(days, 'days');
		return moment(date1).isAfter(threshold);
	}

	static isSameDay(date1: string, date2: string): boolean {
		return moment(date1).isSame(moment(date2), 'day');
	}

	static isToday(date: string): boolean {
		return moment(date).isSame(moment(new Date()), 'day');
	}
}
