import {Pipe, PipeTransform} from '@angular/core';
import {StTransaction} from '@core';

@Pipe({
    name: 'holdingsTotalInvested'
})
export class HoldingsTotalInvestedPipe implements PipeTransform {

    transform(holdings: StTransaction[]): number {
        return holdings.map(h => h.units * h.price).reduce((a, b) => a + b, 0);
    }

}
