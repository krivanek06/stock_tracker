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
	packedbubble = 'packedbubble',
}

export enum BREAK_POINTS {
	XS_DOWN = '(max-width: 400px)',
	SM_DOWN = '(max-width: 576px)',
	MD_DOWN = '(max-width: 768px)',
	LG_DOWN = '(max-width: 1024px)',
	XL_DOWN = '(max-width: 1280px)',
	XXL_DOWN = '(max-width: 1536px)',
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
	type?: ChartType;
	name?: string;
	data: GenericChartSeriesData[] | number[] | number[][];
	color?: string | any;
	lineWidth?: number;
	colorByPoint?: boolean;
}

export interface GenericChartSeriesData {
	name?: string;
	sliced?: boolean;
	y: number | undefined | null;
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

export enum InputTypeEnum {
	TEXT = 'TEXT',
	NUMBER = 'NUMBER',
	EMAIL = 'EMAIL',
	PASSWORD = 'PASSWORD',
	FILTER_FROM_LIST = 'FILTER_FROM_LIST',
	CHECKBOX = 'CHECKBOX',
	RADIO = 'RADIO',
	SLIDE_TOGGLE = 'SLIDE_TOGGLE',
	TIME = 'TIME',
	SELECT = 'SELECT',
	TEXTAREA = 'TEXTAREA',
	MULTISELECT = 'MULTISELECT',
	BUTTON = 'BUTTON',
	DATEPICKER = 'DATEPICKER',
}

export type InputType =
	| 'CHECKBOX'
	| 'RADIO'
	| 'TEXTAREA'
	| 'SLIDE_TOGGLE'
	| 'SELECT'
	| 'MULTISELECT'
	| 'CHIPSELECT'
	| 'SLIDER'
	| 'TEXT'
	| 'NUMBER'
	| 'EMAIL'
	| 'DATEPICKER'
	| 'PASSWORD';

export interface InputSourceSliderConfig {
	step: number;
	min: number;
	max: number;
}

export type PositionColors = 'st-first-position-color' | 'st-second-position-color' | 'st-third-position-color' | 'st-my-position-color' | '';

export const HistoricalPricePeriods = ['1min', '5min', '15min', '30min', '1hour', '4hour', '1y', '5y', 'all'];
