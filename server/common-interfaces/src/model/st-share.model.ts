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

export enum ST_SHARED_ENUM {
    ST_STATIC_DATA = 'static_data',
    ST_STOCK_SYMBOLS = 'stock_smbols',
    ST_STOCK_DAILY_INFORMATION = 'stock_daily_information'
}