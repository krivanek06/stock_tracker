import { Pipe, PipeTransform } from '@angular/core';
import { stFormatLargeNumber } from '../../utils';

/* 
  for object 'obj' and its key 'keyName' returns its last value, also round if number
*/
@Pipe({
  name: 'objArrayLastValue'
})
export class ObjArrayLastValuePipe implements PipeTransform {

  transform<T>(obj: T, keyName: keyof T | string, isNumber = false, isPercent = false): T | string | null {
    const arrayOfValues = obj[(keyName as keyof T)] as any as any[];

    if (!arrayOfValues || arrayOfValues.length === 0) {
      return null;
    }

    let lastValue = arrayOfValues[arrayOfValues.length - 1];
    if (!isNumber) {
      return lastValue;
    }

    return stFormatLargeNumber(lastValue, isPercent);
  }

}
