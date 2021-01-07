import {Directive, EventEmitter, HostListener, Input, Output} from '@angular/core';

/**
 * Emit true when user scroll more than appScrollOffset
 */
@Directive({
    selector: '[appScrollOffset]'
})
export class ScrollOffsetDirective {
    @Output() isEndOfPageEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
    @Input() appScrollOffset = 100;

    constructor() {
    }

    @HostListener('window:scroll')
    checkScroll() {
        // Both window.pageYOffset and document.documentElement.scrollTop
        // returns the same result in all the cases. window.pageYOffset is not supported below IE 9.
        const scrollPosition = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        this.isEndOfPageEmitter.emit(scrollPosition >= this.appScrollOffset);
    }

}
