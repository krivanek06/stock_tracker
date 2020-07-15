import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'millionOrBillion'
})
export class MillionOrBillionPipe implements PipeTransform {

    transform(value: number): unknown {
        value = value / 1000000;
        let symbol = 'mil';
        if (value > 1000) {
            value = value / 1000;
            symbol = 'B';
        }
        const result = value.toFixed(2);
        return result + symbol;
    }

}
