export interface MenuPageInfoInterface {
	title: string;
	icon: string;
}

export interface MenuPageInterface extends MenuPageInfoInterface {
	url: string;
	disabled: boolean;
	hidden: boolean;
	highlight?: boolean;
	highlightText?: string;
}
