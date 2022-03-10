export type CustomElementMetadata = {
	selector: string;
	template: string;
	style?: string;
	styleURL?: string;
	useShadow?: boolean;
};

export type EventDispatcher = {
	emit(options?: CustomEventOptions): void;
};

export type CustomEventOptions = {
	bubbles?: boolean;
	composed?: boolean;
	detail?: any;
};
