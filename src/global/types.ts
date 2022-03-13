export type CustomElementMetadata = {
	selector: string;
	template: string;
	style?: string;
	styleUrl?: string;
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

export type ListenerMetadata = {
	selector: string;
	eventName: keyof GlobalEventHandlersEventMap;
	handler: Function;
};
