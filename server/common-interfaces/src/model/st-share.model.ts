export interface STLog {
    date: string;
    logText: string;
}

export interface STSimpleChart {
    date: string;
    data: number;
    label?: string;
}


export interface STInputFieldChange {
    inputField: String
}

export interface STGeographic {
    longitude: any;
    latitude: any;
}

export enum ST_SHARED_COLLECTON {
    ST_STOCK_SYMBOLS = 'stockSymbols'
}
export const ST_STATIC_DATA_COLLECTION = 'staticData';