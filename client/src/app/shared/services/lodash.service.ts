import { Injectable } from '@angular/core';
import cloneDeep from 'lodash/cloneDeep';
import takeRight from 'lodash/takeRight';
@Injectable()
export class LodashService {
	constructor() {}

	static cloneDeep<T>(value: T): T {
		return cloneDeep(value);
	}
	static takeRight<T>(array: T[] | null | undefined, n?: number): T[] {
		return takeRight(array, n);
	}
}
