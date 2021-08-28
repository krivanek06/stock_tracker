import { Pipe, PipeTransform } from '@angular/core';

// import { DatePipe } from '@angular/common';

@Pipe({
	name: 'relativeTime',
})
export class RelativeTimePipe implements PipeTransform {
	// constructor(public datepipe: DatePipe){

	// }

	/* 
        when:
            reverse === false -> return time diff from value (which represents past date) compared to today
            reverse === true -> return time diff from today compared to value (which represents future date)
    */
	transform(value: string | number, reverse = false): string {
		if (value) {
			const differenceInSeconds = !reverse
				? Math.floor((+new Date() - +new Date(value)) / 1000)
				: Math.floor((+new Date(value) - +new Date()) / 1000);

			const absDiff = Math.abs(differenceInSeconds);
			/*
            If you want to show a relative date up to months only
            like '2 months ago', '11 months ago', etc
            and don't need relative dates such as 'one year ago' or 'six years ago', then
            you can uncomment this section. Comment the 'year' field from the timeIntervals object and
            write the upperLimit value as 31536000.
            NOTE : If you are using following code block then notice that
            we are using the transform function of DatePipe from 'angular/common' to format given Date value.
            Don't forget to import add it to your providers array of app.module.ts.
            See other formating from DatePipe here - https://angular.io/api/common/DatePipe#pre-defined-format-options

            */
			// const upperLimit = 31536000;
			// if(differenceInSeconds > upperLimit){
			//   return this.datepipe.transform(new Date(value), 'MMM d, y');
			// }

			// All values are in seconds
			const timeIntervals = {
				year: 31536000,
				month: 2592000,
				week: 604800,
				day: 86400,
				hour: 3600,
				minute: 60,
				second: 1,
			};
			let counter;
			for (const i in timeIntervals) {
				counter = Math.floor(absDiff / timeIntervals[i]);
				if (counter > 0) {
					if (counter === 1) {
						// singular (1 day ago)
						return counter + ' ' + i + (!reverse && differenceInSeconds > 0 ? ' ago' : '');
					} else {
						// plural (2 days ago)
						return counter + ' ' + i + (!reverse && differenceInSeconds > 0 ? 's ago' : '');
					}
				}
			}
		}
		return String(value);
	}
}