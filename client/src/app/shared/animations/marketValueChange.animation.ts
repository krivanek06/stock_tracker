import {animate, style, transition, trigger,} from '@angular/animations';


export const marketValueChange = trigger('marketValueChange', [
    transition(':increment', [
        animate('700ms', style({
            color: 'green',
            // transform: 'scale(1.1, 1.1)',
        })),
        animate('500ms'),
    ]),

    transition(':decrement', [
        animate('700ms', style({
            color: 'red',
            //   transform: 'scale(0.9, 0.9)',
        })),
        animate('500ms'),
    ]),
]);
