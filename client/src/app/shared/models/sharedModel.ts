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
	isEtf?: boolean | null;
}

export interface UploadedFile {
	downloadURL: string;
	path: string;
}

export interface NameValueContainer<T extends string | number = string | number> {
	name: string;
	value: T;
}

export interface IdNameContainer {
	name: string;
	id: string;
}

export interface GenericChartSeries {
	type?: ChartType;
	name?: string;
	data: GenericChartSeriesData[] | (number | null | undefined)[] | number[][];
	color?: string | any;
	lineWidth?: number;
	colorByPoint?: boolean;
	innerSize?: string;
	minPointSize?: number;
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
	CHECKBOX = 'CHECKBOX',
	RADIO = 'RADIO',
	SLIDE_TOGGLE = 'SLIDE_TOGGLE',
	TIME = 'TIME',
	SELECT = 'SELECT',
	SELECTSEARCH = 'SELECTSEARCH',
	TEXTAREA = 'TEXTAREA',
	MULTISELECT = 'MULTISELECT',
	BUTTON = 'BUTTON',
	CHIPSELECT = 'CHIPSELECT',
	SLIDER = 'SLIDER',
	DATEPICKER = 'DATEPICKER',
}

export type InputType =
	| 'TEXT'
	| 'NUMBER'
	| 'PASSWORD'
	| 'SLIDER'
	| 'EMAIL'
	| 'CHECKBOX'
	| 'RADIO'
	| 'SLIDE_TOGGLE'
	| 'DATEPICKER'
	| 'BUTTON'
	| 'SELECT'
	| 'SELECTSEARCH'
	| 'MULTISELECT'
	| 'TEXTAREA'
	| 'BUTTON';

export interface InputSourceSliderConfig {
	step: number;
	min: number;
	max: number;
	inputSource?: InputSource[];
	displayValue?: unknown;
	value?: number; // used internally by the component
	thumbNailFormatter?: (index: number) => string | number;
}

export interface InputSourceSliderConfig {
	step: number;
	min: number;
	max: number;
}

export interface InputTypeDateTimePickerConfig {
	minDate: Date | string;
}

export type PositionColors = 'g-first-position-color' | 'g-second-position-color' | 'g-third-position-color' | 'g-my-position-color' | '';

export const HistoricalPricePeriods = ['1min', '5min', '15min', '30min', '1hour', '4hour', '1y', '5y', 'all'];
