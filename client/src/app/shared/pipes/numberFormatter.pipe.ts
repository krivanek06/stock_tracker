import {Pipe, PipeTransform} from '@angular/core';
import {stFormatLargeNumber} from '../utils';

@Pipe({
    name: 'numberFormatter'
})
export class NumberFormatterPipe implements PipeTransform {

    transform(value: number, isPercent: boolean = false): unknown {
        return stFormatLargeNumber(value, isPercent);
    }
}


