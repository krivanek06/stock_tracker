import { Injectable } from '@angular/core';
import { cloneDeep, List, takeRight } from 'lodash';

@Injectable()
export class LodashService {
	constructor() {}

	static cloneDeep<T>(value: T): T {
		return cloneDeep(value);
	}
	static takeRight<T>(array: List<T> | null | undefined, n?: number): T[] {
		return takeRight(array, n);
	}
}
