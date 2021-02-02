import {Pipe, PipeTransform} from '@angular/core';
import {stFormatLargeNumber} from '../utils/shared-functions.functions';

@Pipe({
    name: 'numberFormatter'
})
export class NumberFormatterPipe implements PipeTransform {

    transform(value: number): unknown {
        return stFormatLargeNumber(value);
    }
}


