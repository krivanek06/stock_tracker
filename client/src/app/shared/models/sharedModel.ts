/* -------------------- */
export enum ChartType {
    line = 'line',
    column = 'column',
    pie = 'pie',
    pieSemiCircle = 'pie-semi-circle',
    variablepie = 'variablepie',
    area = 'area',
    areaChange = 'area-change',
    areaspline = 'areaspline',
    bar = 'bar'
}

export interface SymbolIdentification {
    symbol: string;
    name: string;
}

export interface UploadedFile {
    downloadURL: string;
    path: string;
}


export interface STCustomValueChange {
    firstChange: boolean;
    currentValue: number;
    previousValue: number;
}

export interface GenericChartSeries {
    name?: string;
    sliced?: boolean;
    y: number;
}

