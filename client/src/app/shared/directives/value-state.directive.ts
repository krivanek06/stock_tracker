import {Directive, ElementRef, Input, OnInit} from '@angular/core';

@Directive({
    selector: '[appValueState]'
})
export class ValueStateDirective implements OnInit {
    @Input() appValueState;

    constructor(private elRef: ElementRef) {

    }

    ngOnInit(): void {
        this.elRef.nativeElement.style.color = !this.appValueState ? '#a0a0a0' : this.appValueState >= 0 ? '#038A00' : '#ae0404';
    }

}
