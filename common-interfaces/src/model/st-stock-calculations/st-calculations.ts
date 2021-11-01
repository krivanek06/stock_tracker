export interface CAPM {
    beta: number;
    Rf: number;
    Rm: number;
    result: number;
}

export interface WACC {
    CAPM: CAPM;
    Rd: number;
    Re: number;
    Wd: number;
    We: number;
    result: number;
    taxRate: number;
}