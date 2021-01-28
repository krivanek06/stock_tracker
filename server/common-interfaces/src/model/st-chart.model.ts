export interface STStockHistoricalClosedDataWithPeriod {
    livePrice: number;
    price: number[];
    symbol: string;
    period: string;
}

export interface STStockHistoricalDataWithPeriod {
    livePrice: number;
    price: number[][];  // [[timestamp, open, high, low, close], [timestamp, open, high, low, close], ... ]
    symbol: string;
    period: string;
}