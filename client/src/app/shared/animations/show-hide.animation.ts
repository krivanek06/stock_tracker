import { animate, AnimationTriggerMetadata, style, transition, trigger } from '@angular/animations';

export const showHideAnimation = (durationMs: number = 350): AnimationTriggerMetadata => {
	return trigger('showHide', [
		transition(':enter', [style({ opacity: 0 }), animate(`${durationMs}ms`, style({ opacity: 1 }))]),
		transition(':leave', [animate(`${durationMs}ms`, style({ opacity: 0 }))]),
	]);
};

export const showAnimation = (durationMs: number = 350): AnimationTriggerMetadata => {
	return trigger('showAnimation', [
		transition(':enter', [style({ opacity: 0 }), animate(`${durationMs}ms`, style({ opacity: 1 }))]),
		transition(':leave', [animate(`0ms`, style({ opacity: 0 }))]),
	]);
};
