export interface STSymbolHistoricalChartData {
    livePrice: number;
    symbol: string;
    period: string;
    price: number[][];  // [[timestamp, open, high, low, close], [timestamp, open, high, low, close], ... ]
    volume:number[][];  // [[timestamp, volume], [timestamp, volume], ... ]
}


export interface STSeries {
    data: number[];
    name: string;
}

export interface STSeriesNumber {
    data: number;
    timestamp: number;
}