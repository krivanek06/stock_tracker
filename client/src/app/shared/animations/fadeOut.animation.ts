import {
    animate,
    state,
    style,
    transition,
    trigger,
} from '@angular/animations';


export const fadeOut = trigger('fadeOut', [
    transition('void => *', [
        style({opacity: 0}),
        animate(400, style({opacity: 1}))
    ]),
    transition('* => void', [
        animate(400, style({opacity: 0}))
    ])
]);
