import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';


export const marketValueChange = trigger('marketValueChange', [
    transition(':increment', [
        animate('200ms', style({
            color: 'green',
           // transform: 'scale(1.1, 1.1)',
        })),
        animate('300ms'),
    ]),

    transition(':decrement', [
        animate('200ms', style({
            color: 'red',
         //   transform: 'scale(0.9, 0.9)',
        })),
        animate('300ms'),
    ]),
]);
