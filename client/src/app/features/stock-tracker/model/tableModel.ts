
export interface TopLosers {
  topLosers: TopStockTableData[];
}

export interface TopGains {
  topGains: TopStockTableData[];
}

export interface TopActive {
  mostActive: TopStockTableData[];
}

export interface TopCrypto {
  topCrypto: TopTableData[];
}

export interface TopTableData {
  currentPrice: number;
  currentPriceChange: number;
  name: string;
  symbol: string;
}


export interface TopStockTableData extends TopTableData{
  peRatio: number;
  volumeChange: number;
}
