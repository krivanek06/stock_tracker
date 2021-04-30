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

