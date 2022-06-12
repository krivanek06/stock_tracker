export interface ChartSeriesData {
    name: string;
    data: number[] | number[][];
    color?: any;
    type?: string;
    threshold?: any;
    tooltip?: any;
    fillColor?: any;
    marker?: any;
    visible?: boolean;
    linearGradient?: any;
    stops?: any;
    additionalKey?: any;
}

export interface MarketSymbolResult {
    p: number;  // price
    s: string;  // source
    t: number;  // timestamp
    v: number; // volume
}

export type Period = 'quarter' | 'year';
export enum PeriodEnum {
    QUARTERLY = 'quarter',
    YEARLY = 'year'
}