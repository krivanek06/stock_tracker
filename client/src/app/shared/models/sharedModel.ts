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
	histogram = 'histogram',
}

export enum BREAK_POINTS {
	XS_DOWN = '(max-width: 400px)',
	SM_DOWN = '(max-width: 576px)',
	XXL_DOWN = '(max-width: 1600px)',
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
	value: string | number;
}

export interface IdNameContainer {
	name: string;
	id: string;
}

export interface GenericChartSeries {
	type: ChartType;
	name: string;
	data: GenericChartSeriesData[] | number[] | number[][];
	color?: string;
	lineWidth?: number;
}

export interface GenericChartSeriesData {
	name?: string;
	sliced?: boolean;
	y: number;
	color?: string;
}

export interface TreeMapData {
	name: string;
	value: number;
	colorValue: number;
}

export interface InputSource {
	image?: string;
	value: string | number | boolean;
	caption: string;
}

export type InputType =
	| 'checkbox'
	| 'RADIO'
	| 'TEXTAREA'
	| 'SLIDE_TOGGLE'
	| 'SELECT'
	| 'MULTISELECT'
	| 'CHIPSELECT'
	| 'SLIDER'
	| 'text'
	| 'number'
	| 'email'
	| 'password'
	| 'password';

export type PositionColors = 'st-first-position-color' | 'st-second-position-color' | 'st-third-position-color' | 'st-my-position-color' | '';

export const HistoricalPricePeriods = ['1min', '5min', '15min', '30min', '1hour', '4hour', '1y', '5y', 'all'];
