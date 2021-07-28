import {chunk as _chunk, List, Many, flatten as _flatten, takeRight as _takeRight } from 'lodash';

export class LodashFuntions {
    static createChunks<T>(array: List<T> | null | undefined, size?: number): T[][] {
        return _chunk(array, size);
    }

    static flattenArray<T>(array: List<Many<T>> | null | undefined): T[]{
        return _flatten(array)
    }

    static takeRight<T>(array: List<T> | null | undefined, n?: number): T[]{
        return _takeRight(array, n)
    }
}