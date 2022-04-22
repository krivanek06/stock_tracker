import { animate, style, transition, trigger } from '@angular/animations';

export const addRemoveFromList = (animationTime = "150ms") => {
	return trigger('addRemoveFromList', [
		transition(':enter', [style({ height: 0, opacity: 0 }), animate(`${animationTime} ease-in`, style({ height: '*', opacity: 1 }))]),
		transition(':leave', [style({ height: '*', opacity: 1 }), animate(`${animationTime}  ease-out`, style({ height: 0, opacity: 0 }))]),
	]);
};
