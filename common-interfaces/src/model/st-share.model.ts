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
    ST_COLLECTION = 'public',
    
    /**
     * Qundal partial data
     */
    MARKET_HISTORY_OVERVIEW = 'market_history_overview', 

    /**
     * Example.
     * Yahoo finance - top gains, losers, crypto, indexes
     * Custom - stock symbol suggestion
     */
    MARKET_DAILY_OVERVIEW = 'market_daily_overview'     
}