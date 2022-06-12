import { Injectable } from '@angular/core';
import cloneDeep from 'lodash/cloneDeep';
import flatten from 'lodash/flatten';
import isEqual from 'lodash/isEqual';
import takeRight from 'lodash/takeRight';
import zip from 'lodash/zip';

@Injectable()
export class LodashService {
	constructor() {}

	static cloneDeep<T>(value: T): T {
		return cloneDeep(value);
	}
	static takeRight<T>(array: T[] | null | undefined, n?: number): T[] {
		return takeRight(array, n);
	}

	static flattenArray<T>(array: T[][] | null | undefined): T[] {
		return flatten(array);
	}

	static zipArrays<T>(...arrays: Array<T[] | null | undefined>): Array<Array<T | undefined>> {
		return zip(...arrays);
	}

	static isEqual(value: any, other: any): boolean {
		return isEqual(value, other);
	}
}
