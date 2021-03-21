export interface FinancialReport {
    acceptedDate: string;
    accessNumber: string;
    cik: string;
    startDate: string;
    endDate: string;
    filedDate: string;
    form: string;
    report: Report;
    source: string;
    symbol: string;
    year: number;
}

export interface Report {
    bs: ReportContent[];
    cf: ReportContent[];
    ic: ReportContent[];
}

export interface ReportContent {
    concept: string;
    label: string;
    unit: string;
    value: number;
}
