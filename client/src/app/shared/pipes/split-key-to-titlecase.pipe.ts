import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'splitKeyToTitlecase'
})
export class SplitKeyToTitlecasePipe implements PipeTransform {

    /**
     * Transform 'ebitPerShare' -> 'Ebit per share'
     */
    transform(value: string): string {
        if (!value) {
            return 'Undefined key';
        }
        return value.match(/[A-Z]*[^A-Z]+/g)
            .join(' ')
            .replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
    }

}
