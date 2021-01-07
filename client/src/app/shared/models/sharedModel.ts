
/* -------------------- */
export enum ChartType {
    line = 'line',
    column = 'column',
    pie = 'pie',
    variablepie = 'variablepie',
    area = 'area',
    areaChange = 'area-change',
    bar = 'bar'
}

export interface SymbolIdentification {
    symbol: string;
    name: string;
}

export interface DocumentIdentification {
    documentId: string;
    additionalInfo: string;
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
