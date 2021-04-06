export interface STStockHistoricalClosedDataWithPeriod {
    livePrice: number;
    price: number[];
    symbol: string;
    period: string;
}

export interface STMarketSymbolHistoricalChartData {
    livePrice: number;
    symbol: string;
    period: string;
    price: number[][];  // [[timestamp, open, high, low, close], [timestamp, open, high, low, close], ... ]
    volume:number[][];  // [[timestamp, volume], [timestamp, volume], ... ]
}