/* -------------------- */
export enum ChartType {
    line = 'line',
    column = 'column',
    pie = 'pie',
    area = 'area',
    areaChange = 'area-change',
    areaspline = 'areaspline',
    bar = 'bar',
    spline = 'spline',
    histogram = 'histogram'
}

export enum BREAK_POINTS {
    SM_DOWN = '(max-width: 400px)'
}

export interface SymbolIdentification {
    symbol: string;
    name: string;
}

export interface UploadedFile {
    downloadURL: string;
    path: string;
}

export interface NameValueContainer {
    name: string;
    value: string;
}

export interface IdNameContainer {
    name: string;
    id: string;
}

export interface GenericChartSeries {
    name?: string;
    sliced?: boolean;
    y: number;
}


export const HistoricalPricePeriods = ['1min', '5min', '15min', '30min', '1hour', '4hour', '1y', '5y', 'all'];
