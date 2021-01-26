export interface HistoricalChartData {
    livePrice: number;
    change: any[];
    price: any[];
    volume: any[];
}

export interface ChartSeriesData {
    name: string;
    data: number[];
    color?: any;
    type?: string;
    threshold?: any;
    tooltip?: any;
    fillColor?: any;
    marker?: any;
    visible?: boolean;
    linearGradient?: any;
    stops?: any;
}


