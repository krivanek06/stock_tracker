import { STMarketChartData } from "./st-market.model";
export interface STMarketSP500AllCategory {
  priceToSale: STMarketChartData;
  priceToBook: STMarketChartData;
  bookValue: STMarketChartData;
  salesGrowth: STMarketChartData;
  sales: STMarketChartData;
  dividends: STMarketChartData;
  dividendYield: STMarketChartData;
  dividendGrowth: STMarketChartData;
  earnings: STMarketChartData;
  earningsYield: STMarketChartData;
  earningsGrowth: STMarketChartData;
  peRatio: STMarketChartData;
  shillerPE: STMarketChartData;
  timestamp: number[];
}
