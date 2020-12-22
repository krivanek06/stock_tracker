
/* -------------------- */
export enum ChartType {
    line = 'line',
    column = 'column',
    pie = 'pie',
    variablepie = 'variablepie',
    area = 'area'
}

export interface ChartDataIdentification {
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

